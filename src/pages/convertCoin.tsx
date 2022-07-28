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
  connectWallet,
  formatNumber,
  ethToCanto,
} from "./convertTransactions";
import { BigNumber, ethers } from "ethers";
import { abi } from "constants/abi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .textField {
    margin: .rem auto;
    padding: 0.4rem 0;
    display: flex;
    width: 18rem;
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

  .coin {
    border: 2px solid var(--primary-color);
    width: 70rem;
    margin: 0 auto;
    margin-top: 4rem;
    min-height: calc(100vh - 38rem);

    display: flex;
    align-items: center;
    color: #fff;
  }
  .coin > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    p {
      text-align: center;
    }
  }

  .title {
    text-shadow: none;
    color: white;
    text-align: center;
    margin-top: 4rem;
    font-size: 28px;
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
  align-itenm: center;
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
  font-weight: 300;
  font-size: 18px;
  background-color: black;
  color: var(--primary-color);
  padding: 0.2rem 2rem;
  border: 1px solid var(--primary-color);
  /* margin: 3rem auto; */
  margin-left: 1rem;
  display: flex;
  align-self: center;

  &:hover {
    background-color: var(--primary-color-dark);
    color: black;
    cursor: pointer;
  }
`;

// --------------------------------  constants --------------------------------------- \\
export const fee = {
  amount: "200",
  denom: "acanto",
  gas: "400000000",
};
export const unbondingFee = {
  amount: "100",
  denom: "acanto",
  gas: "500000",
};
export const chain = {
  chainId: 740,
  cosmosChainId: "canto_740-1",
};
export const memo = "";
export const nodeAddress = "https://chain.plexnode.wtf";
export const evmEndpoint = "https://eth.plexnode.wtf ";
// ----------------------------------------------------------------------------------- \\

const ConvertCoin = () => {
  const [convertCoin, setConvertCoin] = useState(true);
  const [amount, setAmount] = useState("0");
  let nativeBalances = new Array();
  const [address, setAddress] = useState("");
  const [nativeBalance, setNativeBalance] = useState("0");
  const [evmBalance, setEVMBalance] = useState("0");
  const [token, setToken] = useState(convertCoinsBase[0]);
  const [confirmation, setConfirmation] = useState("");

  async function getEvmTokenBalance() {
    const provider = new ethers.providers.JsonRpcProvider(evmEndpoint);
    const erc20Contract = new ethers.Contract(
      token.wAddress,
      abi.Erc20,
      provider
    );
    const bal = await erc20Contract.balanceOf(address);
    const value = ethers.BigNumber.from(bal).toString();
    return value;
  }

  async function transaction() {
    const cantoAddress = await ethToCanto(address, nodeAddress);
    const convertAmount = ethers.utils.parseUnits(amount, token.decimals);
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
      
      setTimeout(() => requestData(), 7000);
      setTimeout(
        () =>
          setConfirmation(
            "you have successfully converted " +
              amount +
              " of " +
              token.name +
              " to " +
              token.wName
          ),
        8000
      );
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
      
      setTimeout(() => requestData(), 7000);
      setTimeout(
        () =>
          setConfirmation(
            "you have successfully converted " +
              amount +
              " of " +
              token.wName +
              " to " +
              token.name
          ),
        8000
      );
    }
  }

  const requestData = async () => {
    setAddress(await connectWallet());
    let coinAmount = "0";
    if (address.length) {
      setEVMBalance(await getEvmTokenBalance());
      nativeBalances = await getCantoBalance(nodeAddress, address);
    }
    nativeBalances.forEach((coin) => {
      if (coin.denom.includes(token.nativeName)) {
        coinAmount = coin.amount;
      }
    });

    setNativeBalance(coinAmount);
  };
  useEffect(() => {
    setNativeBalance('0');
    setEVMBalance('0');
    requestData();
  }, [token]);

  return (
    <Container>
      <p className="title">
        deposit processes are currently easier than withdrawl processes
      </p>
      {confirmation.length != 0 ? (
        <ConfirmationContainer>
          <div className="message">
            <p>{confirmation}</p>
          </div>
          <CloseNotificationButton onClick={() => setConfirmation("")}>
            x
          </CloseNotificationButton>
        </ConfirmationContainer>
      ) : null}
      <div className="coin">
        <div>
          <h1>arrivals</h1>
          <h3>
            balance :{" "}
            {formatNumber(BigNumber.from(nativeBalance), token.decimals)}
          </h3>
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
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              setConvertCoin(!convertCoin);
            }}
          >
            switch
          </Button>
          <div
            style={{
              marginTop: ".75rem",
              marginBottom: "0rem",
            }}
          >
            <CypherText text={convertCoin ? "------>" : "<------"} />
          </div>
          <div style={{ display: "flex", marginBottom: "5rem" }}>
            <div className="textField">
              <p style={{ marginRight: "10px" }}>amount: </p>
              <input
                type="text"
                name="amoubt"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <Transfer onClick={() => transaction()}>transfer</Transfer>
          </div>
        </div>
        <div>
          <h1>canto (evm)</h1>
          <h3>
            balance : {formatNumber(BigNumber.from(evmBalance), token.decimals)}
          </h3>
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
