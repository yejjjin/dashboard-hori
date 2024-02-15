import {
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const MiniSt = (props) => {
  const { startContent, endContent, name, value, growth } = props;

  return (
    <Card h={116}>
      <CardBody>
        <Flex>
          {startContent}
          <Stat ml={startContent ? 5 : 0}>
            <StatLabel>{name}</StatLabel>
            <StatNumber>{value}</StatNumber>
            {/* 삼항연산자 조건 ? 참 : 거짓 */}
            {growth ? (
              <StatHelpText>{growth}since last month</StatHelpText>
            ) : null}
          </Stat>
          <Spacer />
          {endContent}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniSt;
