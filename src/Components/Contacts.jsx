import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  // MdPhone,
  MdEmail,
  MdLocationOn,
  MdWhatsapp,
  // MdFacebook,
  // MdOutlineEmail,
} from "react-icons/md";

// import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import MyForm from "./Form";
export default function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const handleRedirectToWhatsapp = () => {
    window.location.href = "https://wa.me/916201855200";
  };

  return (
    <div id="contact" style={{ textAlign: "center" }}>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "5px" }}>
        Contact
      </h1>

      <Box
        py={{ base: 5, sm: 5, md: 8, lg: 10 }}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <HStack
          pl={0}
          spacing={3}
          alignItems="flex-start"
          textAlign={"center"}
          justifyContent={"center"}
        >
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            <Button
              onClick={handleRedirectToWhatsapp}
              size="md"
              id="contact-phone"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              _hover={{ border: "2px solid green" }}
              leftIcon={<MdWhatsapp color="green" size="20px" />}
              data-aos="zoom-in-up"
            >
              +91-6201855200
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              id="contact-email"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
              data-aos="zoom-in-up"
            >
              faizan.md9735@gmail.com
            </Button>
            <Button
              size="md"
              height="48px"
              variant="ghost"
              // color="#DCE2FF"
              _hover={{ border: "2px solid red" }}
              leftIcon={<MdLocationOn color="red" size="20px" />}
              data-aos="zoom-in-up"
            >
              Jharkhand, India
            </Button>
          </SimpleGrid>
        </HStack>

        <Center>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            <Link
              id="contact-email"
              // onClick={handlephonenumber}
              href="tel:6201855200"
              isExternal
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <HiPhone fontSize={"1.6rem"} />
            </Link>

            <Link
              id="contact-linkedin"
              href="https://www.linkedin.com/in/md-faizan-380a65246/"
              isExternal
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <ImLinkedin fontSize={"1.6rem"} />
            </Link>

            <Link>
              <img
                src="https://komarev.com/ghpvc/?username=mdfaizan973&label=GitHUb Profile%20views&color=0e75b6&style=flat"
                alt="mdfaizan973"
              />
            </Link>

            <Link
              id="contact-github"
              href="https://github.com/mdfaizan973"
              isExternal
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <FaGithub fontSize={"1.6rem"} />
            </Link>

            <Link
              id="contact-email"
              href="https://faizan.md9735@gmail.com"
              isExternal
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <HiOutlineMail fontSize={"1.6rem"} />
            </Link>
            <br />
          </HStack>
        </Center>
      </Box>

      {/* <MyForm /> */}
    </div>
  );
}
