import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Barchart from "../../../components/charts/BarChart";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";

const DailyTraffic = () => {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent={"space-between"}>
          <Flex flexDirection={"column"}>
            <Text fontSize={"14px"} fontWeight={500} color={"txtsecond"}>
              Daily Traffic
            </Text>
            <Flex align={"end"}>
              <Text fontSize={"34px"} fontWeight={700}>
                2.579
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={500}
                marginInlineStart={"6px"}
                color={"txtsecond"}
              >
                Visitors
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Stat>
              <StatHelpText
                color={"#01b574"}
                fontSize={"14px"}
                fontWeight={700}
              >
                <StatArrow type="increase" />
                +2.45%
              </StatHelpText>
            </Stat>
          </Flex>

          {/* <Stat>
            <StatLabel>Daily Traffic</StatLabel>
            <StatHelpText>
              <StatArrow type="increase" />
              +2.45%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatNumber>2.579</StatNumber>
            <StatLabel>Visitors</StatLabel>
          </Stat> */}
        </Flex>
      </CardHeader>
      <CardBody>
        <Barchart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </CardBody>
    </Card>
  );
};

export default DailyTraffic;
