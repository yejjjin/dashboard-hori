import { Card } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Card display={"flex"} align={"center"}>
      <Calendar onChange={onChange} value={value} />
    </Card>
  );
};

export default MiniCalendar;
