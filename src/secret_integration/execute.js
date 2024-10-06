import { SecretNetworkClient, Wallet } from "secretjs";

const wallet = new Wallet("desk pigeon hammer sleep only mistake stool december offer patrol once vacant");
const contractAddress = "secret1w5pw5dcl6sv9yxsrdw4c9g774p3275jr2s2x7h";
const contractCodeHash =
  "5ed825539a87dc0dc131b22c3a0ac9c27816fd6c777b19fc04d030fe3fde8f42";


const secretjs = new SecretNetworkClient({
  chainId: "pulsar-3",
  url: "https://api.pulsar3.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
});

const store_prescription = async () => {
  let handleMsg = {
    store_prescription: {
        quantity: 30, // Quantity of the medication
        num_of_prescriptions: 2, // Number of prescriptions
        dosage: 500, // Dosage in milligrams
        type_of_medication: "Amoxicillin", // Type of medication
        index: 1 // Index for storage or identification
  }
};
  console.log("Storing prescription…");

  let tx = await secretjs.tx.compute.executeContract(
    {
      sender: wallet.address,
      contract_address: contractAddress,
      code_hash: contractCodeHash,
      msg: handleMsg,
    },
    {
      gasLimit: 100_000,
    }
  );
  console.log(tx);
};
store_prescription();