import { FormEvent, useState } from "react";
import { SecretNetworkClient, Wallet } from "secretjs";

const wallet = new Wallet(
  "desk pigeon hammer sleep only mistake stool december offer patrol once vacant"
);
const contractAddress = "secret1w5pw5dcl6sv9yxsrdw4c9g774p3275jr2s2x7h";
const contractCodeHash =
  "5ed825539a87dc0dc131b22c3a0ac9c27816fd6c777b19fc04d030fe3fde8f42";

const secretjs = new SecretNetworkClient({
  chainId: "pulsar-3",
  url: "https://api.pulsar3.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
});

export default function StoreManager() {

    const [farmaco, setFarmaco] = useState<string>(""); // farmaco rimane come stringa
    const [dose, setDose] = useState<number | "">(""); // dose come number o stringa vuota
    const [ricetta, setRicetta] = useState<number | "">(""); // ricetta come number o stringa vuota
    const [quantity, setQuantity] = useState<number | "">("");
    const [indice, setIndice] = useState<number | "">("");
    let [index, setIndex] = useState<number>(0);

  const update_index = () => {
  setIndex((prev) => {
    const newIndex = typeof prev === "number" ? prev + 1 : 1;
    index = newIndex;
    return newIndex;
  });
  };
  const store_prescription = async () => {
    let i = 0;
    let handleMsg = {
      store_prescription: {
        quantity: quantity, // Quantity of the medication
        num_of_prescriptions: ricetta, // Number of prescriptions
        dosage: dose, // Dosage in milligrams
        type_of_medication: farmaco, // Type of medication
        index: index, // Index for storage or identification
      },
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

  let query_prescription = async () => {
    const count = await secretjs.query.compute.queryContract({
      contract_address: contractAddress,
      query: {
        get_prescription: { index: indice },
      },
      code_hash: contractCodeHash,
    });

    console.log(count);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="AddFriend">
      <form action="submit" onSubmit={onFormSubmit} className="">
        <div className="AddFriend__inputs">
          <input
            type="text"
            value={farmaco}
            onChange={(e) => setFarmaco(e.target.value)}
            placeholder="Farmaco"
            required
          />
          <input
            type="text"
            placeholder="Dose"
            value={dose}
            onChange={(e) => setDose(Number((e.target.value)))}
            required
          />
          <input
            type="text"
            value={ricetta}
            placeholder="Prescription"
            onChange={(e) => setRicetta(Number((e.target.value)))}
            required
          />
          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number((e.target.value)))}
            required
          />
        </div>
      <button onClick={store_prescription}>Store Prescription</button>
      </form>
      <form action="submit" onSubmit={onFormSubmit} className="">
      <input
            type="text"
            placeholder="Index"
            value={indice}
            onChange={(e) => setIndice(Number((e.target.value)))}
            required
          />
      <button onClick={query_prescription}>Query Prescription</button>
      </form>
    </div>
  );
}
