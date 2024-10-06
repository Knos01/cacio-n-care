import { NextApiRequest, NextApiResponse } from "next";

interface MedicalData {
  id: string;
  receiptNumber: string;
  name: string;
  surname: string;
  taxCode: string;
  treatment: string;
  issuedAt?: string;
}

const medicalData: MedicalData[] = [
  {
    id: "12345",
    receiptNumber: "R-12039",
    name: "Christian",
    surname: "Kobril",
    taxCode: "KBRCRS99L30E801W",
    treatment: "Pafinur",
    issuedAt: "2024-09-15",
  },
  {
    id: "23322",
    receiptNumber: "R-12023",
    name: "Christian",
    surname: "Kobril",
    taxCode: "KBRCRS99L30E801W",
    treatment: "Paracetamol",
    issuedAt: "2024-02-15",
  },
  {
    id: "43443",
    receiptNumber: "R-12009",
    name: "Christian",
    surname: "Kobril",
    taxCode: "KBRCRS99L30E801W",
    treatment: "Ibuprofen",
    issuedAt: "2023-03-05",
  },
  {
    id: "12232",
    receiptNumber: "R-12002",
    name: "Christian",
    surname: "Kobril",
    taxCode: "KBRCRS99L30E801W",
    treatment: "Ibuprofen",
    issuedAt: "2022-03-05",
  },
  {
    id: "22932",
    receiptNumber: "R-10022",
    name: "Christian",
    surname: "Kobril",
    taxCode: "KBRCRS99L30E801W",
    treatment: "Pafinur",
    issuedAt: "2021-03-05",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MedicalData[]>
) {
  res.status(200).json(medicalData);
}
