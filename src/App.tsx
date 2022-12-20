import "App.css";
import styled from "styled-components";
import GlobalStyles from "styles/global-styles";
import { NavBar, useAlert } from "cantoui";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import bgNoise from "assets/bg-noise.gif";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import ConvertCoin from "pages/convertCoin";
import { useNetworkInfo } from "stores/networkinfo";
import {
  getAccountBalance,
  getChainIdandAccount,
  connect,
  addNetwork,
} from "stores/utils/addCantoToWallet";
import logo from "./assets/logo.svg";
import { GenPubKey } from "pages/genPubKey";
import axios from "axios";

//Styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111;

  text-shadow: 0 0 4px #2cffab, 0 0 20px var(--primary-color);
`;

interface staticProps {
  url: string;
}

const StaticOverlay = styled.div<staticProps>`
  -webkit-font-smoothing: antialiased;
  /* text-shadow: 0 0 4px #ce540a,0 0 20px #ad0000; */
  /* color: #f95200; */
  /* font-family: otto,Arial,Helvetica,sans-serif; */
  background-attachment: fixed;
  background-repeat: repeat;
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-image: ${(p) => "url(" + p.url + ")"};
  background-size: 170px;
  mix-blend-mode: lighten;
  opacity: 70%;
  z-index: 600;
`;
const ScanlinesOverlay = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: otto, Arial, Helvetica, sans-serif;
  background-image: url(data:image/gif;base64,R0lGODlhCgAgAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUFBNUE4NDg5NDgxMUVDQjAwRDg1RkQyNUExRUU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUFBNUE4NTg5NDgxMUVDQjAwRDg1RkQyNUExRUU3RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1QUE1QTgyODk0ODExRUNCMDBEODVGRDI1QTFFRTdEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1QUE1QTgzODk0ODExRUNCMDBEODVGRDI1QTFFRTdEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQoAAQAsAAAAAAoAIAAAAhWEj5nB7Q+jnLTai7N2qvcNhuJIlgUAIfkECQoAAQAsAAAAAAoAIAAAAhaEj6HL7Q+jnLTaixnafOcPhuJIdkcBACH5BAkKAAEALAAAAAAKACAAAAIVjI+py+0Po5wUgYuz1rX7D4biRpIFACH5BAkKAAEALAAAAAAKACAAAAIWjI+py+0Po5wO2Itzprz7D4aLRpJOAQAh+QQJCgABACwAAAAACgAgAAACFYyPqcvtD6OcoNqL8dy8+w9K2Th+BQAh+QQJCgABACwAAAAACgAgAAACFoyPqcvtD6NMoNqL8dy8+w9K2TiGTAEAIfkECQoAAQAsAAAAAAoAIAAAAhWMj6nL7Q9jA7Tae6XevPsPYqIIegUAIfkECQoAAQAsAAAAAAoAIAAAAhaMj6nL7Q8hmLRaG7PevPvPXKIIlksBACH5BAkKAAEALAAAAAAKACAAAAIWjI+py+0PDZi0Whuz3rz7z1yiCJZcAQAh+QQJCgABACwAAAAACgAgAAACFoyPqcvtj4CctFaIs968+22F4UeWSwEAIfkECQoAAQAsAAAAAAoAIAAAAhaMj6nL7QminJS+i7PevHtYhdVHllwBACH5BAkKAAEALAAAAAAKACAAAAIWjI+py50Ao5zT2Yuz3rxnCoLeSJZMAQAh+QQJCgABACwAAAAACgAgAAACFoyPqcsID6OUrdqLs968pwmC3kiWXQEAIfkECQoAAQAsAAAAAAoAIAAAAhaMj6lr4A9jZLTai7PeXMv/deJIllUBACH5BAkKAAEALAAAAAAKACAAAAIWjI+ZwO3/lJy02ouz3tzA/3XiSJZjAQAh+QQFCgABACwAAAAACgAgAAACFoyPoMvdCKOctNqLs97Vec+F4kiWWAEAOw==);
  opacity: 18%;
  z-index: 500;
  background-attachment: fixed;
  background-repeat: repeat;
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;
interface OverlayProps {
  height: number;
}
const Overlay = styled.div<OverlayProps>`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%; // 100% of the parent
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  z-index: 1;
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%; // 4 times the height of the overlay !TODO fix this with js height
    background-image: linear-gradient(
      0deg,
      transparent 0%,
      rgba(32, 128, 32, 0.2) 2%,
      rgba(32, 128, 32, 0.8) 3%,
      rgba(32, 128, 32, 0.2) 3%,
      transparent 100%
    );
    background-repeat: no-repeat;
    background-position: 0 1000vh;
    animation: scan 10s linear 0s 1;
  }
  @keyframes scan {
    0% {
      background-position: 0 ${(props) => -props.height}px;
    }
    35%,
    100% {
      background-position: 0 ${(props) => props.height + 300}px;
    }
  }
`;
//View

function App() {
  const alert = useAlert();
  const netWorkInfo = useNetworkInfo();

  useEffect(() => {
    if (!netWorkInfo.hasPubKey) {
      alert.show("Failure", <GenPubKey />);
    } else if (!netWorkInfo.isConnected) {
      alert.show("Warning", <p>this network is not supported on convert coin, please <a onClick={addNetwork} style={{cursor: "pointer", textDecoration: "underline"}}>switch networks</a></p>)
    } else {
      alert.close();
    }
  }, [netWorkInfo.hasPubKey, netWorkInfo.isConnected]);

  async function setChainInfo() {
    const [chainId, account] = await getChainIdandAccount();
    netWorkInfo.setChainId(chainId);
    netWorkInfo.setAccount(account);
  }
  useEffect(() => {
    setChainInfo();
  }, []);

  //@ts-ignore
  if (window.ethereum) {
    //@ts-ignore
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });

    //@ts-ignore
    window.ethereum.on("networkChanged", () => {
      window.location.reload();
    });
  }

  async function getBalance() {
    if (netWorkInfo.account != undefined) {
      netWorkInfo.setBalance(await getAccountBalance(netWorkInfo.account));
    }
  }

  useEffect(() => {
    getBalance();
  }, [netWorkInfo.account]);

  const pageList = [
    {
      name: "bridge",
      link: "https://bridge.v1.canto.io",
    },
    {
      name: "convert coin",
      link: "https://convert.v1.canto.io",
    },
    {
      name: "staking",
      link: "https://staking.v1.canto.io",
    },
    {
      name: "lp interface",
      link: "https://lp.v1.canto.io",
    },
    {
      name: "lending",
      link: "https://lending.v1.canto.io",
    },
    {
      name: "governance",
      link: "https://governance.v1.canto.io",
    },
  ];
  const [IP, setIP] = useState("");
  const banlist = [
    "0x395513B41Fa8EDD323426Ba7E91C6E7163F7b813".toLowerCase(),
    "0x56C1b2529f12fe2dea3EF47861269FaBF0a31D89".toLowerCase(),
    "0xf64C19F34C11219aD287925642a05677B8e17A25".toLowerCase(),
  ];
  //get ip address
  async function getIP() {
    const res = await axios.get('https://geolocation-db.com/json/');
    const data = res.data;
    setIP(data.IPv4);
  }
  useEffect(() => {
    getIP();
  }, [])

  if (IP == "104.28.251.97" || banlist.includes(netWorkInfo.account?.toLowerCase() ?? "")) {
    return (
      <div>site under construction, please check back later.....</div>
    )
  }

  return (
    <HelmetProvider>
      <ToastContainer />
      <Router>
        <Container className="App">
          <StaticOverlay url={bgNoise} />
          <ScanlinesOverlay />
          <GlobalStyles />
          <OverlayLines />
          <NavBar
            logo={logo}
            chainId={Number(netWorkInfo.chainId)}
            account={netWorkInfo.account || ""}
            currency={"CANTO"}
            balance={netWorkInfo.balance}
            isConnected={netWorkInfo.account != null}
            onClick={() => connect()}
            currentPage={"convert coin"}
            pageList={pageList}
          />
          <ConvertCoin />
        </Container>
      </Router>
    </HelmetProvider>
  );
}

const OverlayLines = () => {
  const location = useLocation();
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const [documentHeight, setDocumentHeight] = useState(scrollHeight);

  useEffect(() => {
    setTimeout(() => {
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setDocumentHeight(scrollHeight);
    }, 2000);
  }, [location]);

  return <Overlay height={documentHeight} />;
};

export default App;
