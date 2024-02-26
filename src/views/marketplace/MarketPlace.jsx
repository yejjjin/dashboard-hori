import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Banner from "./components/Banner";
import NFT from "../../components/card/NFT";

import NFT1 from "../../assets/images/nfts/Nft1.png";
import NFT2 from "../../assets/images/nfts/Nft2.png";
import NFT3 from "../../assets/images/nfts/Nft3.png";
import NFT4 from "../../assets/images/nfts/Nft4.png";
import NFT5 from "../../assets/images/nfts/Nft5.png";
import NFT6 from "../../assets/images/nfts/Nft6.png";
import Avatar1 from "../../assets/images/avatars/avatar1.png";
import Avatar2 from "../../assets/images/avatars/avatar2.png";
import Avatar3 from "../../assets/images/avatars/avatar3.png";
import Avatar4 from "../../assets/images/avatars/avatar4.png";
import TableTopCreators from "./components/TableTopCreators";

const MarketPlace = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        display={{ base: "block", xl: "grid" }}
        gap={6}
      >
        <Flex gridColumn={"1 / span 2"} flexDir={"column"} w="100%" gap={10}>
          <Banner />
          <Flex flexDir={"column"}>
            <Flex
              m={"45px 0 20px"}
              justify={"space-between"}
              alignItems={"center"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={700}
                color={"#1B2559"}
                ms={"24px"}
              >
                Trending NFTs
              </Text>
              <Flex mr={"20px"}>
                <Link
                  color={"primary"}
                  fontSize={"16px"}
                  marginInlineEnd={"44px"}
                >
                  Art
                </Link>
                <Link
                  color={"primary"}
                  fontSize={"16px"}
                  marginInlineEnd={"44px"}
                >
                  Music
                </Link>
                <Link
                  color={"primary"}
                  fontSize={"16px"}
                  marginInlineEnd={"44px"}
                >
                  Collectibles
                </Link>
                <Link color={"primary"} fontSize={"16px"}>
                  Sports
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px" w={"100%"}>
              <NFT
                image={NFT1}
                name="Abstract Colors"
                author="By Esthera Jackson"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                image={NFT2}
                name="ETH AI Brain"
                author="By Nick Wilson"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                image={NFT3}
                name="Mesh Gradients"
                author="By Will Smith"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
            </SimpleGrid>
            <Text
              fontSize={"24px"}
              fontWeight={700}
              color={"#1B2559"}
              margin={"45px 0 36px 24px"}
            >
              Recently Added
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px" w={"100%"}>
              <NFT
                image={NFT4}
                name="Swipe Circles"
                author="By Peter Will"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                image={NFT5}
                name="Colorful Heaven"
                author="By Mark Benjamin"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                image={NFT6}
                name="3D Cubes Art"
                author="By Manny Gates"
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                currentbid="0.91 ETH"
                download="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex w="100%" flexDir={"column"} gap={10}>
          <Card padding={"20px 0"} mb={"20px"}>
            <TableTopCreators />
          </Card>
          <Card></Card>
        </Flex>
      </Grid>
    </>
  );
};

export default MarketPlace;
