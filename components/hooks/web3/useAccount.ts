import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

export const hookFactory: CryptoHookFactory<string, string> = (deps) => (params) => {
    const swrRes = useSWR("web3/useAccount", () => {
        console.log(deps);
        console.log(params);
        return "Test User"
    })

    return swrRes;
}

export const useAccount = hookFactory({ethereum: undefined, provider: undefined});