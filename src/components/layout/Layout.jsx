import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import History from "../common/History";

const Layout = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"} bg={"primay"}>
      <Header />
      <Box
        as="main"
        id="main"
        flexGrow={1}
        ml={{ sm: 0, xl: 313 }}
        padding={{ sm: 0, xl: "8px" }}
      >
        <History />
        {/* {props.showTitle && <h2>{props.title}</h2>}
        {props.children} */}

        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

export const LayoutNone = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
