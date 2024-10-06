import { Title } from "./atoms";
import {
  Table,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/pages/receipts";

interface Props {
  userPrescriptions: {
    dosage: string;
    num_of_prescriptions: string;
    quantity: string;
    type_of_medication: string;
  };
}
export default function PrescriptionStored(props: Props) {
  const { userPrescriptions } = props;

  console.log(userPrescriptions);

  const { dosage, num_of_prescriptions, quantity, type_of_medication } =
    userPrescriptions;

  console.log("ei");

  return (
    <div>
      <Title style={{ marginBottom: "2rem" }}>Prescription Stored</Title>
      <Table>
        <TableHeader style={{ background: "#B3DDF2" }}>
          <tr>
            <TableHeaderCell style={{ color: "#4A4A4A" }}>
              Medicine
            </TableHeaderCell>
            <TableHeaderCell style={{ color: "#4A4A4A" }}>
              Dosage
            </TableHeaderCell>
            <TableHeaderCell style={{ color: "#4A4A4A" }}>
              Quantity
            </TableHeaderCell>
            <TableHeaderCell style={{ color: "#4A4A4A" }}>
              Prescription number
            </TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>{type_of_medication}</TableCell>
            <TableCell>{dosage}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{num_of_prescriptions}</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}
