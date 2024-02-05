import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lighten } from "polished";
import { Container } from "@chakra-ui/react";
import Gnb from "./Gnb";
import { PiHamburger } from "react-icons/pi";
import gsap from "gsap";

const Header = () => {
  // 스크롤 이벤트 함수
  const HandleScroll = () => {
    const hd = document.querySelector("#header");
    const scrollY = window.scrollY;
    const navBar = document.querySelector(".nav-bar_wrapper");
    const navBelt = document.querySelector(".nav-belt_wrapper");
    const hdHeight = hd.offsetHeight; // 헤더 높이
    const swiperHeight =
      document.querySelector(".main-slide")?.offsetHeight || 0; // 슬라이드 높이

    // 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
    if (scrollY > swiperHeight - hdHeight) {
      gsap.to(navBar, { backgroundColor: "#fff", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "#f6f7f8", duration: 0.5 });

      gsap.to(navBelt.querySelectorAll("button"), {
        color: "#000",
        duration: 0.5,
      });
    } else {
      // 100px 이하 스크롤 되면 헤더에 배경색을 없앤다.
      gsap.to(navBar, { backgroundColor: "", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "", duration: 0.5 });
    }
  };

  // 스크롤 이벤트 등록
  window.addEventListener("scroll", HandleScroll);

  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bg={"rgba(0,0,0,.1)"}
      backdropFilter={"saturate(180%) blur(15px)"}
      zIndex={1000}
    >
      {/* tab */}
      <Box
        className="nav-belt_wrapper"
        id="hd"
        display={["none", null, null, null, "block"]}
        h={"32px"}
        bg={"rgba(0,0,0,.6)"}
      >
        <Container
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <ButtonGroup gap={"10px"}>
            <Button variant="link12">공공 기관용</Button>
            <Button variant="link12">금융 클라우드</Button>
          </ButtonGroup>
          <ButtonGroup gap={"10px"}>
            <Button variant="link12">로그인</Button>
            <Button variant="link12">회원 가입</Button>
            <Button variant="link12">Language</Button>
          </ButtonGroup>
        </Container>
      </Box>
      {/* header */}
      <Box className="nav-bar_wrapper" borderColor={"#eee"}>
        <Container>
          <Box
            display={["flex"]}
            h={"60px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading fontSize={24}>
              <Link to="/">Dashboard</Link>
            </Heading>
            <Gnb />
            <ButtonGroup variant="ghost">
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
              <IconButton aria-label="Light database" icon={<SunIcon />} />
            </ButtonGroup>
            <Button variant="ghost">
              <PiHamburger />
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const Logo = styled(Heading)`
  font-size: 24px;
  /* color: ${({ theme }) => theme.colors.brand[500]}; */
  /* background: ${lighten(0.5, "#ff0000")}; */
  /* ${({ theme }) => theme.colors.brand[500]} */
`;

// const 변수이름 = styled(컴포넌트 이름)`속성: 값;`
// const IconBtnGroup = styled(ButtonGroup)`
//     button {
//         background: red;
//     }
// `
// const 변수이름 = styled.태그이름`속성: 값;`
const Nav = styled.nav`
  height: 100%;
  /* background-color: ${({ theme }) =>
    lighten(0.2, theme.colors.yellow[100])}; */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin: 0;
  list-style: none;
  li {
    width: 100%;
    text-align: center;
  }
  a {
    display: block;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    li {
      width: auto;
    }
    a {
      display: inline-block;
    }
  }
`;

export default Header;
