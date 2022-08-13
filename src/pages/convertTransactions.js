import { createTxMsgConvertERC20, createTxMsgConvertCoin } from './utils/transactions-ts';
import { generateEndpointAccount, generateEndpointBroadcast, generatePostBodyBroadcast, generateEndpointBalances } from '@tharsis/provider';
import { createTxRawEIP712, signatureToWeb3Extension } from '@tharsis/transactions';
import { signatureToPubkey } from '@hanchon/signature-to-pubkey';
import { Buffer } from 'buffer';
import { ethers } from 'ethers';


export async function signAndBroadcastTxMsg(msg, senderObj, chain, nodeAddress, account) {
    const signature = await window.ethereum.request({
        method: 'eth_signTypedData_v4',
        params: [account, JSON.stringify(msg.eipToSign)],
    });

    const raw = generateRawTx(chain, senderObj, signature, msg);

    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: generatePostBodyBroadcast(raw),
    };

    console.log(nodeAddress, generateEndpointBroadcast(), postOptions)
    const broadcastPost = await fetch(
        nodeAddress + generateEndpointBroadcast(),
        postOptions
    );
    const response = await broadcastPost.json();
}

export async function getSenderObj(address, nodeAddress) {
    const accountCanto = await ethToCanto(address, nodeAddress);

    const endPointAccount = generateEndpointAccount(accountCanto);
    const url = nodeAddress + endPointAccount;

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    const addressRawData = await fetch(
        url,
        options
    );

    const addressData = await addressRawData.json();

    const senderObj = await reformatSender(addressData['account']['base_account']);

    return senderObj;
}

export async function ethToCanto(address, nodeAddress) {

    return fetch(nodeAddress + "/ethermint/evm/v1/cosmos_account/" + address, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json()).then(result => {
        address = result.cosmos_address
        return address;
    }).catch(error => console.log("error", error));
}

export function formatNumber(bigNumber, decimals) {
    const unitFormatted = ethers.utils.formatUnits(bigNumber, decimals);
    const split = unitFormatted.split('.');
    if (split.length > 1) {
        const decimals = split[1].length;
        return split[0] + "." + split[1].slice(0, Math.min(3, decimals)) + '0'.repeat(Math.max(0, 3 - decimals));
    }
    return split[0];
}

export function formatNumberInput(bigNumber, decimals) {
    const unitFormatted = ethers.utils.formatUnits(bigNumber, decimals);
    return unitFormatted;
}

async function reformatSender(addressData) {
    let pubkey;
    if (addressData['pub_key'] == null) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        await provider.send("eth_requestAccounts", [1]);
        const signer = provider.getSigner();
        const signature = await signer.signMessage('generate_pubkey');

        pubkey = signatureToPubkey(
            signature,
            Buffer.from([
                50, 215, 18, 245, 169, 63, 252, 16, 225, 169, 71, 95, 254, 165, 146, 216,
                40, 162, 115, 78, 147, 125, 80, 182, 25, 69, 136, 250, 65, 200, 94, 178,
            ]),
        );
    } else {
        pubkey = addressData['pub_key']['key'];
    }
    return {
        accountNumber: addressData['account_number'],
        pubkey: pubkey,
        sequence: addressData['sequence'],
        accountAddress: addressData['address'],
    }
}

function generateRawTx(chain, senderObj, signature, msg) {
    let extension = signatureToWeb3Extension(chain, senderObj, signature)
    let rawTx = createTxRawEIP712(msg.legacyAmino.body, msg.legacyAmino.authInfo, extension)
    return rawTx;
}

export async function txConvertCoin(cantoAddress, denom, amount, nodeAddressIP, fee, chain, memo) {
    // get metamask account address
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    // get sender object using eth address
    const senderObj = await getSenderObj(account, nodeAddressIP);
    const params = {
        denom: denom, //native canto asset ibcXXXXXXXXXXX
        amount: amount,
        receiverHexFormatted: account, // same metamask evm address
        senderEvmosFormatted: cantoAddress,
    }
    const msg = createTxMsgConvertCoin(chain, senderObj, fee, memo, params);
    await signAndBroadcastTxMsg(msg, senderObj, chain, nodeAddressIP, account);
}

export async function txConvertERC20(erc20ContractAddress, amount, receiverCantoAddress, nodeAddressIP, fee, chain, memo) {
    // get metamask account address
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    // get sender object using eth address
    const senderObj = await getSenderObj(account, nodeAddressIP);

    const params = {
        contract_address: erc20ContractAddress,
        amount: amount,
        receiverEvmosFormatted: receiverCantoAddress,
        senderHexFormatted: account,
    }

    const msg = createTxMsgConvertERC20(chain, senderObj, fee, memo, params);
    await signAndBroadcastTxMsg(msg, senderObj, chain, nodeAddressIP, account);
}

export async function getCantoBalance(nodeAddressIP, address) {
    const cantoAddress = await ethToCanto(address, nodeAddressIP);
    const url = nodeAddressIP + generateEndpointBalances(cantoAddress);
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    const result = await fetch(url, options).then(response => response.json()).then(result => {
        return result['balances'];
    }).catch(err => {
        console.log(err);
    });
    return result;
}

export async function connectWallet() {
    // get metamask account address
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account;
}