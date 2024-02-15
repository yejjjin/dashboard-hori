import { Box, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";
import { RiBarChartFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdFileCopy, MdOutlineAttachMoney } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import TotalSpent from "./components/TotalSpent";
import Weekly from "./components/Weekly";
import CheckTable from "./components/CheckTable";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";

const Home = () => {
  return (
    <>
      <VStack spacing={5}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="20px"
          w={"100%"}
        >
          <MiniSt
            name="Earnings"
            value="$340.5"
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<RiBarChartFill />}
              />
            }
          />
          <MiniSt
            name="Spend this month"
            value="$642.39"
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<MdOutlineAttachMoney />}
              />
            }
          />
          <MiniSt growth="+23%" name="Sales" value="$574.34" />
          <MiniSt
            name="Your Balance"
            value="$1,000"
            endContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<LiaFlagUsaSolid />}
              />
            }
          />
          <MiniSt
            name="New Tasks"
            value="145"
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<IoMdCheckmarkCircleOutline />}
              />
            }
          />
          <MiniSt
            name="Total Projects"
            value="$2433"
            startContent={
              <IconBox
                w={"56px"}
                h={"56px"}
                bg={"bgDefault"}
                icon={<MdFileCopy />}
              />
            }
          />
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="20px"
          w={"100%"}
          height={345}
        >
          <TotalSpent />
          <Weekly />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
          <CheckTable />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
            <DailyTraffic />
            <PieCard />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
          <Box bg="tomato" height="80px"></Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Home;
