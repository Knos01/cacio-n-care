import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import styled from "styled-components";

interface MedicalData {
  id: string;
  receiptNumber: string;
  name: string;
  surname: string;
  taxCode: string;
  treatment: string;
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ebf5ff;
  padding: 2rem 1rem;
`;

const Card = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const CardHeader = styled.div`
  text-align: center;
  background-color: #2563eb;
  color: white;
  padding: 1.5rem;
`;

const CardTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #dbeafe;
`;

const TableHeaderCell = styled.th`
  padding: 0.75rem;
  text-align: left;
  color: #1e40af;
  font-weight: 600;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #eff6ff;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Button = styled.button<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #2563eb;
  border-radius: 0.375rem;
  background-color: white;
  color: #2563eb;
  font-size: 0.875rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    background-color: #eff6ff;
  }
`;

const PageInfo = styled.span`
  font-size: 0.875rem;
  color: #2563eb;
`;

export default function Component() {
  const [medicalData, setMedicalData] = useState<MedicalData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const receiptsPerPage = 5;
  const totalPages = Math.ceil(medicalData.length / receiptsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching medical data…");
        const response = await fetch("/api/medicalData");

        const data: MedicalData[] = await response.json();
        console.log(data);
        setMedicalData(data);
      } catch (error) {
        console.error("Error fetching medical data:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastReceipt = currentPage * receiptsPerPage;
  const indexOfFirstReceipt = indexOfLastReceipt - receiptsPerPage;
  const currentReceipts = medicalData.slice(
    indexOfFirstReceipt,
    indexOfLastReceipt
  );

  return (
    <PageWrapper>
      <Card>
        <CardHeader>
          <CardTitle>Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <tr>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Receipt Number</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Surname</TableHeaderCell>
                <TableHeaderCell>Tax Code</TableHeaderCell>
                <TableHeaderCell>Treatment</TableHeaderCell>
              </tr>
            </TableHeader>
            <tbody>
              {currentReceipts.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.receiptNumber}</TableCell>
                  <TableCell>{record.name}</TableCell>
                  <TableCell>{record.surname}</TableCell>
                  <TableCell>{record.taxCode}</TableCell>
                  <TableCell>{record.treatment}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <PaginationWrapper>
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} style={{ marginRight: "0.5rem" }} />{" "}
              Previous
            </Button>
            <PageInfo>
              Page {currentPage} of {totalPages}
            </PageInfo>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next <ChevronRight size={16} style={{ marginLeft: "0.5rem" }} />
            </Button>
          </PaginationWrapper>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
