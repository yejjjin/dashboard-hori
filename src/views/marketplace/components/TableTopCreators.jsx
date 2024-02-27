import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TopCreatorsData } from "../../../variables/tables";

const TableTopCreators = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0 22px 20px"}
        mb={"10px"}
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Text fontSize={"20px"} fontWeight={600} color={"#1B254B"}>
          Top Creators
        </Text>
        <Button
          fontSize="16px"
          fontWeight={500}
          color={"primary"}
          borderRadius={"full"}
        >
          See all
        </Button>
      </Flex>
      <Table variant="baseStyle">
        <Thead>
          <Tr>
            <Th>NAME</Th>
            <Th>ARTWORKS</Th>
            <Th isNumeric>RATING</Th>
          </Tr>
        </Thead>
        <Tbody>
          {TopCreatorsData.map((row, index) => (
            <Tr key={index}>
              <Td>{row.NAME}</Td>
              <Td>{row.ARTWORS}</Td>
              <Td isNumeric>{row.RATING}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TableTopCreators;
