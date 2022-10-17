import { addNetwork } from "./utils/addCantoToWallet";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { checkPubKey, getCantoAddressFromMetaMask } from "utils/genPubKey";
import { CantoMainnet, CantoTestnet } from "cantoui";


interface NetworkProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  chainId: string | undefined;
  setChainId: (chainId: string | undefined) => void;
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
  hasPubKey: boolean;
  balance: string;
  setBalance: (balance: string) => void;
}

export const useNetworkInfo = create<NetworkProps>()(
  devtools((set) => ({
    isConnected: true,
    setIsConnected: (connected) => set({ isConnected: connected }),
    chainId: undefined,
    setChainId: (chainId) => {
      set({ chainId: chainId });
      if (
        Number(chainId) == CantoTestnet.chainId ||
        Number(chainId) == CantoMainnet.chainId
      ) {
        set({ isConnected: true });
      } else {
        set({ isConnected: false });
      }
    },
    account: undefined,
    setAccount: async (account) => {
      let cantoAddress = await getCantoAddressFromMetaMask(account);
      let hasPubKey = await checkPubKey(cantoAddress);
      set({ account: account })
      set({hasPubKey : hasPubKey});
    },
    hasPubKey: true,
    balance: "0",
    setBalance: (balance) => set({ balance: balance }),
  }))
);