import {
  Card,
  CardHeader,
  Checkbox,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { tableComplexData } from "../../../variables/tables";

const ComplexTable = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader fontSize={"22px"} fontWeight={700}>
        Complex Table
      </CardHeader>

      <Table variant="baseStyle">
        <Thead>
          <Tr>
            <Th>NAME</Th>
            <Th>STATUS</Th>
            <Th>DATE</Th>
            <Th isNumeric>PROGRESS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableComplexData.map((row, index) => (
            <Tr key={index}>
              <Td>{row.NAME}</Td>
              <Td>
                <Icon />
                {row.STATUS}
              </Td>
              <Td>{row.DATE}</Td>
              <Td isNumeric>{row.PROGRESS}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default ComplexTable;
