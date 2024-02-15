import {
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import LineChart from "../../../components/charts/LineChart";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";

const TotalSpent = () => {
  return (
    <Card display={"flex"} flexDir={"row"}>
      <CardHeader>
        <Stat>
          <StatNumber fontSize={"34px"} fontWeight={700}>
            $37.5K
          </StatNumber>
          <StatLabel fontSize={"14px"} fontWeight={500} color={"txtsecond"}>
            Total
          </StatLabel>
          <StatLabel fontSize={"14px"} fontWeight={500} color={"txtsecond"}>
            Spent
          </StatLabel>
          <StatHelpText>
            <StatArrow type="increase" />
            +2.45%
          </StatHelpText>
        </Stat>
      </CardHeader>
      <CardBody>
        <LineChart
          chartData={lineChartDataTotalSpent}
          chartOptions={lineChartOptionsTotalSpent}
        />
      </CardBody>
    </Card>
  );
};

export default TotalSpent;
