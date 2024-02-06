import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Container } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box as="main" id="main" flexGrow={1} pt={"92px"}>
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
