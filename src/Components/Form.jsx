import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const MyForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:faizan.md9735@gmail.com?subject=Message%20from%20Website&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </VStack>
      <form
        action="mailto:faizan.md9735@gmail.com"
        method="post"
        encType="text/plain"
      >
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="Type your message here..."
          required
        ></textarea>
        <br />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default MyForm;
