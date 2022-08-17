import DropDownModal from "components/modals/dropDownModal";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledPopup } from "./bridge";
import { convertCoinsBase } from "constants/canto";
import down from "assets/down.svg";
import CypherText from "components/lending/CypherText";
import {
  txConvertCoin,
  txConvertERC20,
  getCantoBalance,
  ethToCanto,
  formatNumberInput,
} from "./convertTransactions";
import { BigNumber, ethers } from "ethers";
import { abi } from "constants/abi";
import { useNetworkInfo } from "stores/networkinfo";
import { GenPubKey } from "./genPubKey";
import { CantoMainnet } from "cantoui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .textField {
    padding: 0.5rem 0;
    display: flex;
    width: 20rem;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    padding: 1rem 2rem;
    background-color: #1e2c1d;
    border: 1px solid var(--primary-color);
    text-shadow: none;
  }

  input[type="text"] {
    background-color: transparent;
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin: 0 auto;
    /* margin-top : 4rem; */

    &:focus {
      outline: none;
    }
  }

  h1 {
    margin-bottom: 5%;
  }

  .coin {
    border: 2px solid var(--primary-color);
    width: 70rem;
    margin: 0 auto;
    margin-top: 3rem;
    height: 30rem;
    display: flex;
    align-items: center;
    color: #fff;
    background: black;
    padding-bottom: 4rem;
    padding-top: 1rem;
  }

  .switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
  }
  .coin > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.6rem;
    p {
      text-align: center;
    }
    .balance {
      text-align: center;
    }
  }

  .title {
    margin-left: 10%;
    margin-right: 10%;
    text-shadow: none;
    color: white;
    margin-top: 2rem;
    font-size: 21px;
  }

  .cypher {
    letter-spacing: -8px;
  }
`;

const Button = styled.button`
  font-weight: 300;
  font-size: 18px;
  background-color: black;
  color: var(--primary-color);
  padding: 0.2rem 2rem;
  border: 1px solid var(--primary-color);
  /* margin: 3rem auto; */
  display: flex;
  align-self: center;
  margin-top: 50px;
  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;

const MaxButton = styled.button`
  font-weight: 500;
  font-size: 18px;
  background-color: black;
  color: var(--primary-color);
  padding: 0.2rem 0.4rem;
  border: 0.1px solid var(--primary-color);
  /* margin: 3rem auto; */
  display: flex;
  align-self: center;
  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;

const ConfirmationContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
  padding: 0.4rem 0;
  width: 50rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 18px;
  padding: 1rem 2rem;
  background-color: #1e2c1d;
  border: 1px solid var(--primary-color);
  text-shadow: none;
  .message {
    margin: auto;
  }
`;

const CloseNotificationButton = styled.button`
  align-self: center;
  font-weight: 300;
  font-size: 18px;
  background-color: black;
  color: var(--primary-color);
  padding: 1px 10px;
  border: 1px solid var(--primary-color);
  margin: 0px;
  align-self: center;
  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;

const Transfer = styled.button`
  font-weight: 800;
  font-size: 20px;
  background-color: black;
  color: var(--primary-color);
  padding: 0.2rem 2rem;
  border: 1px solid var(--primary-color);
  /* margin: 3rem auto; */
  display: flex;
  align-self: center;

  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;

const DocLink = () => {
  return (
    <a
      style={{ color: "white" }}
      href="https://canto.gitbook.io/canto/user-guides/getting-started#convert-assets-for-use-on-canto-evm"
    >
      here
    </a>
  );
};

// --------------------------------  constants --------------------------------------- \\
export const fee = {
  amount: "300000000000000000",
  denom: "acanto",
  gas: "3000000",
};

export const unbondingFee = {
  amount: "100",
  denom: "acanto",
  gas: "500000",
};
export const chain = {
  chainId: 7700,
  cosmosChainId: "canto_7700-1",
};
export const memo = "";
export const nodeAddress = 'https://mainnode.plexnode.org:1317';
export const evmEndpoint = 'https://mainnode.plexnode.org:8545';
const REFRESH_RATE = 11000;
// ----------------------------------------------------------------------------------- \\

const ConvertCoin = () => {
  const [convertCoin, setConvertCoin] = useState(true);
  const [amount, setAmount] = useState("0");
  const [displayAmount, setDisplayAmount] = useState("");
  let nativeBalances = new Array();
  const [nativeBalance, setNativeBalance] = useState("0");
  const [evmBalance, setEVMBalance] = useState("0");
  const [token, setToken] = useState(convertCoinsBase[0]);
  const [confirmation, setConfirmation] = useState<React.ReactNode>(null);

  const { account } = useNetworkInfo();

  async function getEvmTokenBalance() {
    const provider = new ethers.providers.JsonRpcProvider(evmEndpoint);
    const erc20Contract = new ethers.Contract(
      token.wAddress,
      abi.Erc20,
      provider
    );
    const bal = await erc20Contract.balanceOf(account);
    const value = ethers.BigNumber.from(bal).toString();
    return value;
  }

  async function transaction() {
    const cantoAddress = await ethToCanto(account, nodeAddress);
    const convertAmount = BigNumber.from(amount);
    const formattedAmount = formatNumberInput(
      BigNumber.from(amount),
      token.decimals
    );
    if (convertAmount.isZero()) {
      return;
    }
    if (convertCoin) {
      if (convertAmount.gt(BigNumber.from(nativeBalance))) {
        setConfirmation(
          "your available balance is smaller than the entered amount..."
        );
        return;
      }

      setConfirmation("waiting for the metamask transaction to be signed...");
      await txConvertCoin(
        cantoAddress,
        token.nativeName,
        convertAmount.toString(),
        nodeAddress,
        fee,
        chain,
        memo
      );
      setConfirmation("waiting for the transaction to be verified...");

      setTimeout(() => requestData(), REFRESH_RATE - 1000);
      setTimeout(async () => {
        const currBalance = await getEvmTokenBalance();
        const prefix = currBalance != evmBalance ? "" : "un";
        const message =
          "you have " +
          prefix +
          "successfully converted " +
          formattedAmount +
          " of canto " +
          token.name +
          " to evm " +
          token.wName +
          (prefix.length != 0 ? ". read more about why in the docs " : "");
        setConfirmation(
          <>
            {message} {prefix.length != 0 ? <DocLink /> : null}
          </>
        );
      }, REFRESH_RATE);
    } else {
      if (convertAmount.gt(BigNumber.from(evmBalance))) {
        setConfirmation(
          "your available balance is smaller than the entered amount..."
        );
        return;
      }

      setConfirmation("waiting for the metamask transaction to be signed...");
      await txConvertERC20(
        token.wAddress,
        convertAmount.toString(),
        cantoAddress,
        nodeAddress,
        fee,
        chain,
        memo
      );
      setConfirmation("waiting for the transaction to be verified...");

      setTimeout(() => requestData(), REFRESH_RATE - 1000);
      setTimeout(async () => {
        const currBalance = await getEvmTokenBalance();
        const prefix = currBalance != evmBalance ? "" : "un";
        const message =
          "you have " +
          prefix +
          "successfully converted " +
          formattedAmount +
          " of evm " +
          token.name +
          " to canto " +
          token.wName +
          (prefix.length != 0 ? ". read more about why in the docs " : "");
        setConfirmation(
          <>
            {message} {prefix.length != 0 ? <DocLink /> : null}
          </>
        );
      }, REFRESH_RATE);
    }
  }

  const setMaxAmount = () => {
    if (convertCoin) {
      setAmount(nativeBalance);
      setDisplayAmount(formatNumberInput(nativeBalance, token.decimals));
    } else {
      setAmount(evmBalance);
      setDisplayAmount(formatNumberInput(evmBalance, token.decimals));
    }
  };

  const requestData = async () => {
    let coinAmount = "0";
    if (account != undefined) {
      setEVMBalance(await getEvmTokenBalance());
      nativeBalances = await getCantoBalance(nodeAddress, account);
    }
    nativeBalances.forEach((coin) => {
      if (coin.denom.includes(token.nativeName)) {
        coinAmount = coin.amount;
      }
    });
    setNativeBalance(coinAmount);
  };
  useEffect(() => {
    setNativeBalance("0");
    setEVMBalance("0");
    requestData();
  }, [token]);

  return (
    <Container>
      <p className="title">
        users that initially bridge their assets will receive them on the canto
        native blockchain. however, the canto lending market, canto dex, and
        various third-party dapps operate on the canto evm, which tracks assets
        independently. to convert your native canto assets to/from evm assets,
        please toggle the arrow to the direction you want your assets to flow.
        when bridging assets out of canto, the assets{" "}
        <span style={{ fontWeight: 800 }}>must</span> be on the canto native
        side – (not the evm).
      </p>
      {confirmation != null ? (
        <ConfirmationContainer>
          <div className="message">
            <p>{confirmation}</p>
          </div>
          <CloseNotificationButton onClick={() => setConfirmation(null)}>
            x
          </CloseNotificationButton>
        </ConfirmationContainer>
      ) : null}
      <div className="coin">
        <div>
          <h1>canto</h1>
          <div className="balance">
            <h3>balance</h3>
            <h3>
              {formatNumberInput(BigNumber.from(nativeBalance), token.decimals)}
            </h3>
          </div>
          <TokenWallet
            tokens={convertCoinsBase}
            wrapped={false}
            activeToken={token}
            onSelect={(value) => {
              setToken(value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "4.8rem",
            // justifyContent: "flex-end",
          }}
        >
          <div className="switch">
          <Button
            onClick={() => {
              setConvertCoin(!convertCoin);
            }}
          >
            <CypherText
              text={convertCoin ? "------------->" : "<-------------"}
            />
          </Button>
          <p style={{
            marginTop : "1rem"
          }}>{convertCoin ? "click to switch " : "click to switch"}</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginBottom: "4rem",
              marginTop: "5.3rem",
            }}
          >
            <div className="textField">
              <p style={{ marginRight: "10px", fontWeight : "600" }}>amount: </p>
              <input
                type="text"
                name="amoubt"
                id="amount"
                value={displayAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  setDisplayAmount(value);
                  setAmount(
                    ethers.utils.parseUnits(value, token.decimals).toString()
                  );

                  const split = value.split(".");
                  if (split.length > 1) {
                    const decimals = split[1];
                    if (decimals.length > token.decimals) {
                      setConfirmation(
                        "this token does not have this many decimal places points..."
                      );
                      setAmount(
                        ethers.utils.parseUnits("0", token.decimals).toString()
                      );
                    }
                  }
                }}
              />
              <MaxButton onClick={() => setMaxAmount()}>max</MaxButton>
            </div>
            <Transfer onClick={() => transaction()}>transfer</Transfer>
          </div>
        </div>
        <div>
          <h1>canto (evm)</h1>
          <div className="balance">
            <h3>balance</h3>
            <h3>
              {formatNumberInput(BigNumber.from(evmBalance), token.decimals)}
            </h3>
          </div>

          <TokenWallet
            tokens={convertCoinsBase}
            wrapped
            activeToken={token}
            onSelect={(value) => {
              setToken(value);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

interface ITokenSelect {
  activeToken: any;
  wrapped: boolean;
  tokens: any[] | undefined;
  onSelect: (value: any) => void;
}

const TokenWallet = ({
  activeToken,
  onSelect,
  tokens,
  wrapped,
}: ITokenSelect) => {
  const [isOpen, setOpen] = useState(false);

  const Box = styled.div`
    background-color: #1c1c1c;
    padding: 1rem 1.4rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 15rem;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
      border: 1px solid var(--primary-color);
    }
  `;
  return (
    <Box
      onClick={() => {
        setOpen(true);
      }}
    >
      {activeToken.icon ? (
        <img
          src={activeToken.icon}
          alt={
            wrapped && activeToken.wName != undefined
              ? activeToken.wName
              : activeToken.name
          }
          height={30}
          width={30}
        />
      ) : null}
      <span
        style={{
          flex: "2",
        }}
      >
        {tokens
          ? wrapped && activeToken.wName != undefined
            ? activeToken.wName
            : activeToken.name
          : "loading tokens"}
      </span>
      <img src={down} alt="" />
      {tokens ? (
        <StyledPopup
          open={isOpen}
          onClose={() => {
            setOpen(false);
          }}
        >
          <hr
            style={{
              border: "0px",
              borderBottom: "1px solid #00502C",
              marginBottom: "1rem",
            }}
          />
          <DropDownModal
            wrapped={wrapped}
            tokens={tokens}
            onClose={(value) => {
              if (onSelect) onSelect(value);
              setOpen(false);
            }}
          />
        </StyledPopup>
      ) : null}
    </Box>
  );
};

export default ConvertCoin;
