import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box, Stack } from "@chakra-ui/react";
import History from "./History";
import Util from "./Util";
import DynamicTitle from "./DynamicTitle";

const Layout = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box
        as="main"
        id="main"
        flexGrow={1}
        pl={{ base: "12px", xl: 312 }}
        pr={{ base: "12px", xl: "30px" }}
        pt={{ base: 200, md: 140 }}
        pb={{ base: "20px", md: "30px" }}
        transition={"all 0.2s"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          spacing={0}
          pos={"fixed"}
          top={"27px"}
          left={{ base: "12px", xl: "310px" }}
          right={"12px"}
          py={2}
          px={{ base: 2, xl: 4 }}
          bg={"rgba(244, 247, 254, 0.2)"}
          backdropFilter={"blur(10px)"}
          borderRadius={"0.75rem"}
          transition={"all 0.2s"}
          zIndex={1}
        >
          <Box>
            <History />
            <DynamicTitle />
          </Box>
          <Util />
        </Stack>

        {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
        <Outlet />
      </Box>
    </Box>
  );
};

export const LayoutNone = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
