import Footer from "./Footer";
import Header from "./Header";
import { Box, Container } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box as="main" id="main" flexGrow={1} pt={"92px"}>
        {props.showTitle && <h2>{props.title}</h2>}
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
