import Loader from "./Loader";
import PrescriptionStored from "./PrescriptionStored";
import { Title } from "./atoms";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { SecretNetworkClient, Wallet } from "secretjs";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  margin: 0 5 0 5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0366d6;
      box-shadow: 0 0 5px rgba(3, 102, 214, 0.5);
    }
  }
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: #0366d6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0353b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(3, 102, 214, 0.5);
  }
`;

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
  const [prescriptions, setPrescriptions] = useState<{
    dosage: string;
    num_of_prescriptions: string;
    quantity: string;
    type_of_medication: string;
  } | null>(null);
  const [showPrescriptions, setShowPrescriptions] = useState<boolean>(false);
  const [isStoring, setIsStoring] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const update_index = () => {
    setIndex((prev) => {
      const newIndex = typeof prev === "number" ? prev + 1 : 1;
      index = newIndex;
      return newIndex;
    });
  };
  const store_prescription = async () => {
    setIsStoring(true);
    setTxHash(null);
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

    console.log(wallet.address);

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

    alert("Prescription stored successfully with id: 0!");
    setIsStoring(false);
    setTxHash(tx.transactionHash);
  };

  let query_prescription = async () => {
    const prescriptionsData = (await secretjs.query.compute.queryContract({
      contract_address: contractAddress,
      query: {
        get_prescription: { index: indice },
      },
      code_hash: contractCodeHash,
    })) as {
      prescription: {
        dosage: string;
        num_of_prescriptions: string;
        quantity: string;
        type_of_medication: string;
      };
    };

    console.log(prescriptionsData);
    setPrescriptions({ ...prescriptionsData?.prescription });
  };

  useEffect(() => {
    console.log(prescriptions);
    if (prescriptions) {
      setShowPrescriptions(true);
    }
  }, [prescriptions]);

  console.log(showPrescriptions);

  const onStoreSubmit = (e: FormEvent) => {
    e.preventDefault();
    store_prescription();
  };

  const onQuerySubmit = (e: FormEvent) => {
    e.preventDefault();
    query_prescription();
  };

  return (
    <div>
      <FormWrapper>
        <Title>Store your prescriptions</Title>
        <Form action="submit" onSubmit={onStoreSubmit}>
          <InputGroup>
            <input
              type="text"
              value={farmaco}
              onChange={(e) => {
                e.preventDefault();
                setFarmaco(e.target.value);
              }}
              placeholder="Medicine"
              required
            />
            <input
              type="text"
              placeholder="Dose"
              value={dose}
              onChange={(e) => setDose(Number(e.target.value))}
              required
            />
            <input
              type="text"
              value={ricetta}
              placeholder="Prescription"
              onChange={(e) => setRicetta(Number(e.target.value))}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </InputGroup>
          <Button onClick={store_prescription}>Store Prescription</Button>
        </Form>
        {isStoring && <Loader size={50} color={"#B2E3C6"} />}

        <Form action="submit" onSubmit={onQuerySubmit}>
          <InputGroup>
            <input
              type="text"
              placeholder="Index"
              value={indice}
              onChange={(e) => setIndice(Number(e.target.value))}
              required
            />
          </InputGroup>
          <Button onClick={query_prescription}>Query Prescription</Button>
        </Form>
      </FormWrapper>
      {showPrescriptions && prescriptions && (
        <PrescriptionStored userPrescriptions={prescriptions} />
      )}
    </div>
  );
}
