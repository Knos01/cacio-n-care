import AttestationABI from "../abi/AttestationABI.json";
import { Nav } from "@/components/Nav";
import {
  Button,
  Container,
  Description,
  Form,
  FormGroup,
  Input,
  Label,
  Layout,
  TextArea,
  Title,
} from "@/components/atoms";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { encodeFunctionData } from "viem";

const ZKPASS_APP_ID = process.env.NEXT_PUBLIC_ZKPASS_APP_ID!;
const ZKPASS_SCHEMA_ID = process.env.NEXT_PUBLIC_ZKPASS_SCHEMA_ID!;

// Page component
const CreateProof = () => {
  const [formData, setFormData] = useState({
    appId: ZKPASS_APP_ID,
    schemaId: ZKPASS_SCHEMA_ID,
  });

  const [isLoading, setIsLoading] = useState(false);

  const { user } = usePrivy();
  const { wallets } = useWallets();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log({ user });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

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
      //@ts-ignore
      // const provider = new ethers.BrowserProvider(window.ethereum);
      // const signer = await provider.getSigner();
      // //get your ethereum address
      // const account = await signer.getAddress();

      console.log(user?.wallet?.address);
      const res: any = await connector.launch(
        formData.schemaId,
        user?.wallet?.address
      );
      console.log(res);

      //Sepolia contract address
      //You can add from https://chainlist.org/?search=11155111&testnets=true
      const contractAddress = "0x8c18c0436A8d6ea44C87Bf5853F8D11B55CF0302";

      const taskId = ethers.hexlify(ethers.toUtf8Bytes(res.taskId)); // to hex
      let schemaId = ethers.hexlify(ethers.toUtf8Bytes(formData.schemaId)); // to hex

      const wallet = wallets[0]; // Replace this with your desired wallet
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

      // const contract = new ethers.Contract(
      //   contractAddress,
      //   AttestationABI,
      //   wallet.address
      // );

      const data = encodeFunctionData({
        abi: AttestationABI,
        functionName: "attest",
        args: [chainParams],
      });
      // const data = contract.interface.encodeFunctionData("attest", [
      //   chainParams,
      // ]);

      // let transaction = {
      //   to: contractAddress,
      //   from: account,
      //   value: 0,
      //   data,
      // };

      const transactionRequest = {
        to: contractAddress,
        value: 0,
        data,
        from: wallet.address,
      };

      const transactionHash = await provider.request({
        method: "eth_sendTransaction",
        params: [transactionRequest],
      });

      console.log(transactionHash);

      console.log("transactionHash", transaction);
      // let tx = await signer?.sendTransaction(transaction);
      // console.log("transaction hash====>", tx.hash);
      alert("Transaction sent successfully!");
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }

    setIsLoading(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Title>Submit your receipt</Title>
      <Description>Submit your receipt to claim your proof.</Description>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="appId">AppId:</Label>
          <Input
            type="text"
            id="appId"
            name="appId"
            placeholder="Enter appId"
            value={formData.appId}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="schemaId">SchemaId:</Label>
          <TextArea
            id="schemaId"
            name="schemaId"
            placeholder="Enter schemaId"
            value={formData.schemaId}
            onChange={handleChange}
            rows={5}
          />
        </FormGroup>

        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateProof;
