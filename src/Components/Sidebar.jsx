import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Md_Faizan_Resume from "../Md_Faizan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");
  return (
    <>
      <Button onClick={toggleColorMode} marginRight={"10px"}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <Box
            borderBottomWidth="1px"
            display={"flex"}
            justifyContent={"space-between"}
            padding={"10px"}
          >
            <Button
              width="max-content"
              colorScheme={"red"}
              id="resume-button-1"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17ti5ypZ77muuZC6yulNyPwNkgbKfpEM2/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Md_Faizan_Resume}
                target="_blank"
                download="Md_Faizan_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </Box>
          <DrawerBody>
            <Box textAlign="center">
              <Link
                onClick={() => {
                  setTitle("Home");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#home"
                className="nav-link home"
                display={"block"}
                marginTop={"10px"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setTitle("About");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#about"
                className="nav-link about"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                About
              </Link>
              <Link
                onClick={() => {
                  setTitle("Skills");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#skills"
                className="nav-link skills"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Skills
              </Link>
              <Link
                onClick={() => {
                  setTitle("Projects");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#projects"
                className="nav-link projects"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Projects
              </Link>
              <Link
                onClick={() => {
                  setTitle("Contact");
                  setTimeout(() => {
                    onClose();
                  }, 500);
                }}
                href="#contact"
                className="nav-link contact"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Contact
              </Link>
              {/* <Image src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODI4NjZkMWM1N2JlNjAzMzAyZjYzZTA5ZDFiMjk4MTI5NTRlYzk5MyZjdD1n/eNN15JxJPCnFuUat81/giphy.gif'/> */}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
