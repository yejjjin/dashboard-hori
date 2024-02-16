import { DragHandleIcon } from "@chakra-ui/icons";
import { Card, Checkbox, Stack, Text } from "@chakra-ui/react";

const Task = () => {
  return (
    <Card p={"20px"}>
      <Text>Tasks</Text>
      <Stack p={"0 11px"}>
        <Checkbox mb={"20px"} fontSize={"16px"} fontWeight={700}>
          Landing Page Design{" "}
          <DragHandleIcon
            ml={"25px"}
            color={"txtsecond"}
            w={"20px"}
            h={"20px"}
            display={"inline-block"}
          />
        </Checkbox>
        <Checkbox defaultChecked mb={"20px"}>
          Dashboard Builder
          <DragHandleIcon ml={"25px"} color={"txtsecond"} />
        </Checkbox>
        <Checkbox defaultChecked mb={"20px"}>
          Mobile App Design
          <DragHandleIcon ml={"25px"} color={"txtsecond"} />
        </Checkbox>
        <Checkbox mb={"20px"}>
          Illustrations
          <DragHandleIcon ml={"25px"} color={"txtsecond"} />
        </Checkbox>
        <Checkbox defaultChecked mb={"20px"}>
          Promotional LP
          <DragHandleIcon ml={"25px"} color={"txtsecond"} />
        </Checkbox>
      </Stack>
    </Card>
  );
};

export default Task;
