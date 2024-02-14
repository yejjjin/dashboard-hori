import {
  Box,
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const MiniSt = (props) => {
  const { startContent, endContent, name, value, growth } = props;

  return (
    <Card variant={"primary"}>
      <CardBody>
        <Flex>
          {startContent}
          <Stat ml={startContent ? 5 : 0}>
            <StatLabel>{name}</StatLabel>
            <StatNumber>{value}</StatNumber>
            {/* 삼항연산자 조건 ? 참 : 거짓 */}
            {growth ? <Text>{growth}글씨 추가</Text> : null}
          </Stat>
          <Spacer />
          {endContent}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniSt;
