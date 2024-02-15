import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PieChart from "../../../components/charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../variables/charts";
import { Select } from "@chakra-ui/react";

const PieCard = () => {
  return (
    <Card p={"20px"}>
      <Flex w={"100%"} justify={"space-between"} align={"center"}>
        <Text fontSize={"16px"} fontWeight={600}>
          Your Pie Chart
        </Text>
        <Select
          variant="unstyled"
          defaultValue={"Monthly"}
          width="unset"
          fontSize={"14px"}
          fontWeight={700}
          color={"#a3aed0"}
        >
          <option value="option1">Daily</option>
          <option value="option2">Monthly</option>
          <option value="option3">Yearly</option>
        </Select>
      </Flex>

      <CardBody display={"flex"} alignItems={"center"} p={"none"}>
        <PieChart
          chartData={pieChartData}
          chartOptions={pieChartOptions}
          w={"100%"}
          h={"100%"}
        />
      </CardBody>

      <CardFooter
        boxShadow={"rgba(112, 144, 176, 0.12) 0px 18px 40px;"}
        borderRadius={"20px"}
        bg={"white"}
      >
        <Stat display={"flex"} justifyContent={"center"}>
          <StatLabel
            fontSize={"12px"}
            fontWeight={700}
            color={"#a3aed0"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box
              w={"8px"}
              h={"8px"}
              borderRadius={"50%"}
              bg={"#422AFB"}
              marginInlineEnd={"4px"}
            />
            Your files
          </StatLabel>
          <StatNumber>63%</StatNumber>
        </Stat>
        <Divider orientation="vertical" marginInline={"60px"} />
        <Stat display={"flex"} justifyContent={"center"}>
          <StatLabel
            fontSize={"12px"}
            fontWeight={700}
            color={"#a3aed0"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box
              w={"8px"}
              h={"8px"}
              borderRadius={"50%"}
              bg={"rgb(106, 210, 255)"}
              marginInlineEnd={"4px"}
            />
            System
          </StatLabel>
          <StatNumber>25%</StatNumber>
        </Stat>
      </CardFooter>
    </Card>
  );
};

export default PieCard;
