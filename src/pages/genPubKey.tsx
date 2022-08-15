import { CantoMainnet } from "cantoui";
import { useState } from "react"
import { useNetworkInfo } from "stores/networkinfo";
import { addNetwork } from "stores/utils/addCantoToWallet";
import { generatePubKey } from "utils/genPubKey";


export const GenPubKey = () => {
    
    const [pubKeySuccess, setPubKeySuccess] = useState("");
    const networkInfo = useNetworkInfo();
    
    
    
    return (
        <p
        hidden={networkInfo.hasPubKey}
        style={{
          color: "#b73d3d",
          fontWeight: "bold",
        }}
      >
        please{" "}
        <a
          style={{ color: "red", textDecoration: "underline", cursor: "pointer"}}
          onClick={() => {
            if (Number(networkInfo.chainId) != CantoMainnet.chainId) {
                addNetwork();
                setPubKeySuccess("switch to canto network")
            } else {
                generatePubKey(networkInfo.account, setPubKeySuccess)}
            }

          } 
        >
          generate public key
        </a>{" "}
        before converting assets
        <div>{pubKeySuccess}</div>
      </p>
    )
}
