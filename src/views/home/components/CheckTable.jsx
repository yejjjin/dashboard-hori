import { Card, CardHeader } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { tableDataCheck } from "../../../variables/tables";

const CheckTable = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader fontSize={"22px"} fontWeight={700}>
        Check Table
      </CardHeader>

      <Table variant="baseStyle">
        <Thead>
          <Tr>
            <Th>NAME</Th>
            <Th>PROGRESS</Th>
            <Th>QUANTITY</Th>
            <Th isNumeric>DATE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableDataCheck.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox
                  defaultChecked={row.checked}
                  colorScheme="brandScheme.500"
                  borderColor={"gray.200"}
                  sx={{
                    "[data-checked]": {
                      borderColor: "#422AFB",
                      background: "#422AFB",
                    },
                  }}
                />
                {row.NAME}
              </Td>
              <Td>{row.PROGRESS}</Td>
              <Td>{row.QUANTITY}</Td>
              <Td isNumeric>{row.DATE}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default CheckTable;
