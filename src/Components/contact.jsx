import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("portfolio");
  // useToast is from the chakra ui ohk
  const toast = useToast();

  return (
    <>
      <section className="nav-link contact" id="contact">
        <div className="nav-link-contact">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>
            Talent wins games, but teamwork and intelligence win championships.
          </h4>
          <p>
            Fill the form to connect if any query{" "}
            <i className="fas fa-smile"></i>
          </p>
          <div className="list">
            <li id="contact-phone">
              <a
                href="https://api.whatsapp.com/send?phone=+916387389485"
                target="_blank"
              >
                +91-6387389485
              </a>
            </li>
            <li>
              <a
                href="mailto:surajsinghpatel2002@gmail.com"
                id="contact-email"
                target="_blank"
              >
               nhb668912@gmail.com{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/suraj-singh-22844a257/"
                id="contact-linkedin"
              >
                {" "}
                Linkedin : Suraj Singh
              </a>
            </li>
          </div>
          <div className="contact-icons">
            <a
              id="contact-github"
              href="https://github.com/Suraj121704c"
              target="_blank"
            >
              <i>
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+916387389485"
              target="_blank"
            >
              <i>
                <AiOutlineWhatsApp />
              </i>
            </a>
            <a
              id="contact-linkedin"
              href="https://www.linkedin.com/in/suraj-singh-22844a257/"
              target="_blank"
            >
              <i>
                <BsLinkedin />
              </i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "var(--main-color)" }}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="enter email address"
              border="1px solid green"
              style={{ marginTop: "5px" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "var(--main-color)",
              }}
            >
              Type your message here
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="write here..."
              style={{ marginTop: "5px" }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              type="submit"
              disabled={state.submitting}
              color={"white"}
              backgroundColor={"green"}
              onClick={() =>
                toast({
                  title: "Message Sent...",
                  description:
                    "Thanks for messaging us we will replay you as soon as possible...",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "top",
                })
              }
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
