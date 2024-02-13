import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

import { Input } from "@chakra-ui/react";
const History = () => {
  const location = useLocation(); // 현재 경로를 가져옴
  const pathnames = location.pathname.split("/").filter((x) => x); // 경로를 '/'로 나누고 빈 문자열을 제거
  return (
    <Breadcrumb display={"flex"}>
      <BreadcrumbItem display={"flex"}>
        <BreadcrumbLink
          as={ReactRouterLink}
          to="/"
          fontSize={33}
          fontWeight={700}
          padding={"8px"}
        >
          Main Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pathnames.map((name, index) => {
        // 경로를 순회하며 BreadcrumbItem을 생성
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // 현재 경로까지의 경로를 생성
        const isLast = index === pathnames.length - 1; // 현재 경로가 마지막 경로인지 확인
        // 현재 경로이면 isCurrentPage를 true로 설정
        // 현재 경로가 아니면 링크를 생성
        // 첫 글자를 대문자로 변환
        return (
          <BreadcrumbItem key={index} isCurrentPage={isLast}>
            <BreadcrumbLink as={ReactRouterLink} to={routeTo}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <Spacer />
      <Box
        width={365}
        height={61}
        display={"flex"}
        alignItems={"center"}
        bg={"white"}
        borderRadius={30}
        padding={"8px"}
        gap={"8px"}
      >
        <Stack
          spacing={3}
          display={"flex"}
          alignItems={"center"}
          flexDir={"row"}
        >
          <InputGroup display={"flex"} alignItems={"center"}>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="16px"
              // textAlign={"center"}
              padding={"0 8px 0 12px"}
              children={<Search2Icon />}
            />
            <Input
              variant="filled"
              placeholder="Search..."
              width={225}
              height={45}
              borderRadius={20}
              bg={"primay"}
            />
          </InputGroup>
        </Stack>
      </Box>
    </Breadcrumb>
  );
};
export default History;
