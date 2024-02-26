import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Flex,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const NFT = (props) => {
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setlike] = useState(false);
  return (
    <Card padding={"20px"}>
      <Flex direction={"column"} justifyContent={"center"}>
        <Box mb={"20px"} position={"relative"}>
          <Image src={image} w={"100%"} h={"100%"} borderRadius={"xl"} />
          <Button
            h={"36px"}
            minW={"36px"}
            bg={"white"}
            _hover={{ bg: "rgba(255, 255, 255, 0.92)" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p={"0px"}
            position={"absolute"}
            top={"14px"}
            right={"14px"}
            borderRadius={"50%"}
            onClick={() => {
              setlike(!like);
            }}
          >
            <Icon
              as={like ? IoHeart : IoHeartOutline}
              color={"primary"}
              transition={"0.2 linear"}
              w={"20px"}
              h={"20px"}
            />
          </Button>
        </Box>

        <Flex direction={"column"}>
          <Flex direction={"column"}>
            <Text
              fontSize={"18px"}
              fontWeight={700}
              color={"#1B254B"}
              margin={"0 14px 5px 0"}
            >
              {name}
            </Text>
            <Text
              fontSize={"14px"}
              fontWeight={400}
              color={"txtsecond"}
              mr={"14px"}
            >
              {author}
            </Text>
            <AvatarGroup
              max={3}
              mt={"10px"}
              fontSize={"12px"}
              color={"primary"}
              h={"28px"}
              w={"28px"}
            >
              {bidders &&
                bidders.map((avt, key) => <Avatar key={key} src={avt} />)}
            </AvatarGroup>
          </Flex>
          <Flex mt={"25px"} direction={"column"}>
            <Text fontWeight="700" fontSize="14px" color={"primary"}>
              Current Bid: {currentbid}
            </Text>
            <Link href={download} mt={"10px"}>
              <Button
                fontSize={"14px"}
                fontWeight={500}
                padding={"5px 24px"}
                bg={"#11047a"}
                color={"white"}
                borderRadius={"full"}
              >
                Place Bid
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default NFT;
