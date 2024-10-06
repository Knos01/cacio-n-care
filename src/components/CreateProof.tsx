import AttestationABI from "../abi/AttestationABI.json";
import { Button, Description, Title } from "@/components/atoms";
import {
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Table,
} from "@/pages/receipts";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { ethers } from "ethers";
import { useState } from "react";
import { encodeFunctionData } from "viem";

const ZKPASS_APP_ID = process.env.NEXT_PUBLIC_ZKPASS_APP_ID!;
const ZKPASS_SCHEMA_ID = process.env.NEXT_PUBLIC_ZKPASS_SCHEMA_ID!;

// Page component
const CreateProof = () => {
  const [formData, setFormData] = useState({
    appId: ZKPASS_APP_ID,
    schemaId: ZKPASS_SCHEMA_ID,
  });

  const { user } = usePrivy();
  const { wallets } = useWallets();
  const { client } = useSmartWallets();

  console.log({ user });

  const createProof = async () => {
    try {
      console.log("formData", formData);
      const connector = new TransgateConnect(formData.appId);
      const isAvailable = await connector.isTransgateAvailable();
      if (!isAvailable) {
        return alert("Please install zkPass TransGate");
      }
      //@ts-ignore
      if (window.ethereum == null) {
        return alert("MetaMask not installed");
      }

      const res: any = await connector.launch(
        formData.schemaId,
        user?.wallet?.address
      );

      const contractAddress = "0x8c18c0436A8d6ea44C87Bf5853F8D11B55CF0302";

      const taskId = ethers.hexlify(ethers.toUtf8Bytes(res.taskId)); // to hex
      let schemaId = ethers.hexlify(ethers.toUtf8Bytes(formData.schemaId)); // to hex

      console.log({ wallets });

      const wallet = wallets[0]; // Replace this with your desired wallet
      await wallet.switchChain(11155111);

      const provider = await wallet.getEthereumProvider();

      const chainParams = {
        taskId,
        schemaId,
        uHash: res.uHash,
        recipient: wallet.address,
        publicFieldsHash: res.publicFieldsHash,
        validator: res.validatorAddress,
        allocatorSignature: res.allocatorSignature,
        validatorSignature: res.validatorSignature,
      };
      console.log("chainParams", chainParams);

      const data = encodeFunctionData({
        abi: AttestationABI,
        functionName: "attest",
        args: [chainParams],
      });

      const txHash = await client?.sendTransaction({
        account: client?.account,
        to: contractAddress,
        data: encodeFunctionData({
          abi: AttestationABI,
          functionName: "attest",
          args: [chainParams],
        }),
      });

      alert("Transaction sent successfully!");
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }
  };

  const medicines = [
    {
      id: 1,
      name: "Paracetamol",
      price: 5.0,
    },
    {
      id: 2,
      name: "Ibuprofen",
      price: 10.0,
    },
    {
      id: 3,
      name: "Aspirin",
      price: 15.0,
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Title>Obtain your receipt proof</Title>
      <Description>Choose one of the medicines of your needs.</Description>
      <Table>
        <TableHeader style={{ background: "#B3DDF2" }}>
          <tr>
            <TableHeaderCell style={{ color: "#4A4A4A" }}>
              Medicine
            </TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {medicines.map((m) => (
            <TableRow key={m.id}>
              <TableCell>{m.name}</TableCell>
              <TableCell>€{m.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button onClick={() => createProof()}>Create Proof</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CreateProof;
