import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import BarChart from "../../../components/charts/BarChart";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "../../../variables/charts";

const Weekly = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader fontSize={20} color={"#1b2559"} fontWeight={700}>
        Weekly Revenue
      </CardHeader>
      <CardBody h={240} mt="auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </CardBody>
    </Card>
  );
};

export default Weekly;
