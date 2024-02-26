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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TableTopCreators;
