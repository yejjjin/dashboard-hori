import {
  Card,
  CardHeader,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { tableComplexData } from "../../../variables/tables";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { MdError } from "react-icons/md";
import { Progress } from "@chakra-ui/react";

const ComplexTable = () => {
  return (
    <Card>
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
        <Tbody fontSize={"14px"} fontWeight={700}>
          {tableComplexData.map((row, index) => (
            <Tr key={index}>
              <Td p={"8px 24px"}>{row.NAME}</Td>
              <Td p={"8px 24px"} display={"flex"} alignItems={"center"}>
                {row.STATUS === "Approved" && (
                  <IoMdCheckmarkCircle
                    size={24}
                    color="#01b574"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {row.STATUS === "Disable" && (
                  <IoMdCloseCircle
                    size={24}
                    color="#ee5d50"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {row.STATUS === "Error" && (
                  <MdError
                    size={24}
                    color="#ffb547"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {row.STATUS}
              </Td>
              <Td p={"8px 24px"}>{row.DATE}</Td>
              <Td isNumeric p={"8px 24px"}>
                <Progress value={row.PROGRESS} w={"100%"} color={"primary"} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default ComplexTable;
