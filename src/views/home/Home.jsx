import { Box, Button, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";
import { RiBarChartFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdFileCopy, MdOutlineAttachMoney } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import TotalSpent from "./components/TotalSpent";
import Weekly from "./components/Weekly";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";
import MiniCalendar from "./components/MiniCalendar";
import Task from "./components/Task";
import ComplexTable from "./components/ComplexTable";
import CheckTables from "./components/CheckTables";
import { useEffect, useState } from "react";

const Home = () => {
  // useEffect(함수, [의존성 배열])
  // 1. 컴포넌트가 마운트(탄생) 할 때 배경색 변경
  useEffect(() => {
    document.body.style.backgroundColor = "lightgray";
    document.body.id = "intro";
    document.body.classList.add("intro");
    // 2. 컴포넌트가 언미운트(소멸) 될 때 배경색 원래대로 변경
    return () => {
      document.body.style.backgroundColor = "";
      document.body.id = "";
      document.body.classList.remove("intro");
    };
  }, []);

  // 3. 업데이트 : 버튼 클릭시 배경색 변경
  const [color, setColor] = useState("lightgray");
  const toggleColor = () => {
    setColor((prevColor) =>
      prevColor === "lightgray" ? "lightblue" : "lightgray"
    );
  };

  // 데이터(color)가 변경 될 때 마다 함수 실행
  useEffect(() => {
    console.log("색상이 변경됨", color);
  }, [color]);

  return (
    <>
      <VStack spacing={5}>
        <Button onClick={toggleColor}>배경색 변경</Button>
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
            value="154"
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
          <CheckTables />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
            <DailyTraffic />
            <PieCard />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
          <ComplexTable />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={"100%"}>
            <Task />
            <MiniCalendar />
          </SimpleGrid>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Home;
