import React, { useEffect, useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Container,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Gnb from "./Gnb";

const Header = () => {
  return (
    <>
      <Box
        display={{ sm: "none", xl: "block" }}
        as="header"
        id="header"
        position={"fixed"}
        top={0}
        left={0}
        bottom={0}
        w={292}
        bg={"white"}
        zIndex={10}
      >
        <Heading
          as={"h1"}
          fontSize={26}
          textAlign={"center"}
          pt={14}
          pb={9}
          borderBottom={"1px solid"}
          borderColor={"lineDefault"}
        >
          <Link as={ReactRouterLink} to="/">
            HORIZON FREE
          </Link>
        </Heading>
        <Gnb />
      </Box>
    </>
  );
};

export default Header;
