import { generateEndpointAccount } from "@tharsis/provider";
import { createMessageSend } from "@tharsis/transactions";
import { chain, fee, memo } from "pages/convertCoin";
import { getSenderObj, signAndBroadcastTxMsg } from "pages/convertTransactions";
import { BigNumber } from "ethers";
import { CantoMainnet } from "cantoui";
import { cosmosApiEndpoint2 } from "constants/canto";


export async function checkPubKey(bech32Address) {
    const endPointAccount = generateEndpointAccount(bech32Address);
    
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    try {
        const addressRawData = await fetch(
           "https://canto2.plexnode.wtf" + endPointAccount,
            options
        );
        const addressData = await addressRawData.json();
        return addressData['account']['base_account']['pub_key'] != null
    } catch {
        return false;
    }
}
export async function getCantoAddressFromMetaMask(address) {
    const nodeURLMain = "https://canto2.plexnode.wtf";
    const result = await fetch(
      nodeURLMain + "/ethermint/evm/v1/cosmos_account/" + address,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("setting canto address");
    let cosmosAddress = (await result.json()).cosmos_address;
    return cosmosAddress;
}

async function checkCantoBalance(bech32Address) {
  const nodeURLMain = cosmosApiEndpoint2;
  const result = await fetch(
    nodeURLMain + "/cosmos/bank/v1beta1/balances/" + bech32Address + "/by_denom?denom=acanto",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  let balance = BigNumber.from((await result.json()).balance.amount);
  console.log(balance);
  
  if (balance.lt(BigNumber.from("300000000000000000"))) {
    console.log("0 balance")
    return false;
  }
  return true;
}

export async function generatePubKey(hexAddress, setIsSuccess) {
    const botAddress = "canto1efrhdukv096tmjs7r80m8pqkr3udp9g0uadjfv";
    if (hexAddress === undefined) {
      setIsSuccess("please connect your metamask to this page...");
      return;
    }
    setIsSuccess("please wait...");
  
    const bech32Address = await getCantoAddressFromMetaMask(hexAddress);
    const hasCanto = await checkCantoBalance(bech32Address);

  
    const hasPubKey = await checkPubKey(bech32Address);
    if (hasPubKey) {
      setIsSuccess("user already has a public key for account: " + hexAddress);
      return;
    }

    if (!hasCanto) {
      try {
        // await bot call only if user has no canto
        const botResponse = await callBot(bech32Address, hexAddress);
        console.log(botResponse);
      } catch {
        console.log("no response from bot")
        setIsSuccess("account must have ETH balance on etheruem mainnet or CANTO balance on canto network")
        return;
      }
    }
    // await generate pub key
    setIsSuccess("waiting for the metamask transaction to be signed...");
    const response = await txSend(botAddress, hexAddress, bech32Address, "1"); // await txSend to bot
    console.log(response);
    setIsSuccess("generating account...");
    const wrapper = async () => {
      const hasPubKey = await checkPubKey(bech32Address);
      if (hasPubKey) {
        setIsSuccess("account successfully generated!");
        window.location.reload();
      } else {
        setIsSuccess("public key generatation was unsuccessful");
      }
    };
    setTimeout(wrapper, 8000);
  }

  async function callBot(cantoAddress, hexAddress) {
    const CANTO_BOT_URL = "https://bot.plexnode.wtf/";
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Request-Headers": "Content-Type, Authorization",
              "Access-Control-Allow-Origin": "true",
          },
          body: JSON.stringify({
              cantoAddress: cantoAddress,
              hexAddress: hexAddress,
          }),
      };
  
      const result = await fetch(CANTO_BOT_URL, options);
      return result;
  }
  export async function txSend(
	destinationBech32,
	senderHexAddress,
	senderBech32address,
	amount
) {
	const senderObj = await getSenderObj(senderHexAddress, "https://canto2.plexnode.wtf");
	const params = {
		destinationAddress: destinationBech32,
		amount: amount,
		denom: "acanto",
	};

  const sendFee = {
    amount: "25000000000000000",
    denom: "acanto",
    gas: "250000",
  };
	const msg = createMessageSend(chain, senderObj, sendFee, memo, params);
	return signAndBroadcastTxMsg(msg, senderObj, chain, "https://canto2.plexnode.wtf", senderHexAddress);
}
