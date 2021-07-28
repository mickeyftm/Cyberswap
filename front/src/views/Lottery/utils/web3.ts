import Web3 from "web3";

const FANTOM_NODE_RPC = [
  "https://rpcapi.fantom.network",
  "https://rpcapi.fantom.network",
  "https://rpcapi.fantom.network",
];

const FANTOM_ARCHIVE_NODE_RPC = [
  "https://rpcapi.fantom.network",
  "https://rpcapi.fantom.network",
  "https://rpcapi.fantom.network",
  "https://rpcapi.fantom.network",
];

export const getWeb3 = (archive = false): Web3 => {
  const provider: string = archive
    ? FANTOM_ARCHIVE_NODE_RPC[Math.floor(Math.random() * FANTOM_ARCHIVE_NODE_RPC.length)]
    : FANTOM_NODE_RPC[Math.floor(Math.random() * FANTOM_NODE_RPC.length)];

  return new Web3(new Web3.providers.HttpProvider(provider, { timeout: 30000 }));
};

export const getContract = (abi: any, address: string, archive = false) => {
  const web3: Web3 = getWeb3(archive);

  return new web3.eth.Contract(abi, address);
};
