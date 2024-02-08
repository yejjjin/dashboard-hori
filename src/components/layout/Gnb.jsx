import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const Gnb = () => {
  const navArr = [
    { name: "Main Dashboard", path: "/", icon: <MdHome /> },
    { name: "NFT Marketplace", path: "/", icon: <IoCartOutline /> },
    { name: "Data Tables", path: "/", icon: <MdBarChart /> },
    { name: "Profile", path: "/", icon: <FaUser /> },
    { name: "Sign In", path: "/", icon: <IoMdLogIn /> },
  ];
  return (
    <UnorderedList>
      {navArr.map((item, index) => (
        <ListItem key={index}>
          <Link
            as={ReactRouterLink}
            to={item.path}
            display="flex"
            position="relative"
          >
            {item.name} {item.icon}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Gnb;
