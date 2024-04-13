import { DragHandleIcon } from "@chakra-ui/icons";
import { Card, Checkbox, Stack, Text, Flex } from "@chakra-ui/react";

const Task = () => {
  return (
    <Card p={"20px"}>
      <Text mb={2} fontSize={"18px"} fontWeight={700} marginBottom={"30px"}>
        Tasks
      </Text>
      <Stack spacing={4}>
        <Flex alignItems="center" justifyContent="space-between">
          <Checkbox fontSize={"16px"} display={"flex"}>
            Landing Page Design
          </Checkbox>
          <DragHandleIcon color={"txtsecond"} />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Checkbox defaultChecked>Dashboard Builder</Checkbox>
          <DragHandleIcon color={"txtsecond"} />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Checkbox defaultChecked>Mobile App Design</Checkbox>
          <DragHandleIcon color={"txtsecond"} />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Checkbox>Illustrations</Checkbox>
          <DragHandleIcon color={"txtsecond"} />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Checkbox defaultChecked>Promotional LP</Checkbox>
          <DragHandleIcon color={"txtsecond"} />
        </Flex>
      </Stack>
    </Card>
  );
};

export default Task;
