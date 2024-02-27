import {
  Card,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";

const NFT = (props) => {
  const { image, name, author, date, price } = props;

  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );
  return (
    <Card
      p={"21px 24px"}
      _hover={bgItem}
      bg="transparent"
      boxShadow="unset"
      transition="0.2s linear"
    >
      <Flex w={"100%"}>
        <Image src={image} w="66px" h="66px" borderRadius="xl" me="16px" />
        <Flex direction={"column"} justifyContent={"center"} w={"100%"}>
          <Text fontSize={"16px"} fontWeight={700} mb={"5px"} me={"14px"}>
            {author}
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            color={"#A3AED0"}
            me={"14px"}
          >
            {name}
          </Text>
        </Flex>
        <Flex me={"10px"} alignItems={"center"}>
          <Icon as={FaEthereum} w={"9px"} h={"16px"} me={"7px"} />
          <Text fontSize={"16px"} fontWeight={700}>
            {price}
          </Text>
        </Flex>
        <Text fontSize={"14px"} fontWeight={700} color={"#A3AED0"} ms={"auto"}>
          {date}
        </Text>
      </Flex>
    </Card>
  );
};

export default NFT;
