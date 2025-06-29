import emailjs from "emailjs-com";
import { Form, Input, Button, notification } from "antd";
import { MessageOutlined, SendOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { EMAILJS_CONFIG, initEmailJS } from "../../config/emailjs";

export default function Messages() {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  // Initialize EmailJS
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSendEmail = (values) => {
    // Better validation
    if (
      !values.email ||
      !values.messages ||
      values.email.trim() === "" ||
      values.messages.trim() === ""
    ) {
      notification.error({
        message: "Oops",
        description: "Please fill all the required fields",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      notification.error({
        message: "Invalid Email",
        description: "Please enter a valid email address",
      });
      return;
    }

    const emailParams = {
      to_name: "Suraj Singh",
      from_name: values.email,
      message: values.messages,
      from_email: values.email,
    };

    // Show loading notification
    const loadingKey = "emailLoading";
    notification.info({
      key: loadingKey,
      message: "Sending...",
      description: "Please wait while we send your message",
      duration: 0,
    });

    // Test EmailJS connection first
    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailParams,
        EMAILJS_CONFIG.USER_ID
      )
      .then((response) => {
        // Close loading notification
        notification.destroy(loadingKey);

        console.log("EmailJS Response:", response);
        notification.success({
          message: "Email Sent Successfully!",
          description: "Your message has been sent. I'll get back to you soon!",
        });
        form.resetFields();
      })
      .catch((error) => {
        // Close loading notification
        notification.destroy(loadingKey);

        console.error("EmailJS Error Details:", {
          error: error,
          serviceId: EMAILJS_CONFIG.SERVICE_ID,
          templateId: EMAILJS_CONFIG.TEMPLATE_ID,
          userId: EMAILJS_CONFIG.USER_ID,
        });

        let errorMessage =
          "There was an error sending your message. Please try again later.";

        // Provide more specific error messages
        if (error.text) {
          if (error.text.includes("Invalid service ID")) {
            errorMessage =
              "Email service configuration error. Please contact the website administrator.";
          } else if (error.text.includes("Invalid template ID")) {
            errorMessage =
              "Email template configuration error. Please contact the website administrator.";
          } else if (error.text.includes("Invalid user ID")) {
            errorMessage =
              "Email authentication error. Please contact the website administrator.";
          }
        }

        notification.error({
          message: "Failed to Send Email",
          description: errorMessage,
        });
      });
  };

  const openNotification = () => {
    api.open({
      message: "Send me a message",
      description: (
        <Form form={form} layout="vertical" onFinish={handleSendEmail}>
          <Form.Item
            label="Message"
            name="messages"
            rules={[
              { required: true, message: "Please enter your message!" },
              { min: 10, message: "Message must be at least 10 characters!" },
            ]}
          >
            <Input.TextArea
              placeholder="Enter your message here..."
              rows={4}
              showCount
              maxLength={500}
            />
          </Form.Item>

          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="your.email@example.com" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            icon={<SendOutlined />}
            style={{ width: "100%", borderRadius: 5, marginTop: 8 }}
          >
            Send Message
          </Button>
        </Form>
      ),
      duration: 0, // Keep open until user closes or sends
      placement: "topRight",
      style: { width: 400 },
    });
  };

  return (
    <div>
      {contextHolder}

      <MessageBttonStyled onClick={openNotification}>
        <MessageOutlined />
      </MessageBttonStyled>
    </div>
  );
}
const MessageBttonStyled = styled.button({
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45% ",
  width: "40px",
  height: "40px",
  backgroundColor: "black",
  color: "white",
  fontSize: "1.4rem",
});
