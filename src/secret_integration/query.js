import { SecretNetworkClient, Wallet } from "secretjs";
// import dotenv from "dotenv";
// dotenv.config();

const wallet = new Wallet("desk pigeon hammer sleep only mistake stool december offer patrol once vacant");

const secretjs = new SecretNetworkClient({
  chainId: "pulsar-3",
  url: "https://api.pulsar3.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
});

const contractAddress = "secret1jd3mekyh2k4hv9c05l4anyuzcw86qm6m2s8006";
const contractCodeHash =
  "51e23645b4bbf9ea52aac5cd88ff7127b899bcc81bfd7822c1f78e61e4c96686";

let query_prescription = async () => {
  const count = await secretjs.query.compute.queryContract({
    contract_address: contractAddress,
    query: {
      get_prescription: {index: 1},
    },
    code_hash: contractCodeHash,
  });

  console.log(count);
};
query_prescription();