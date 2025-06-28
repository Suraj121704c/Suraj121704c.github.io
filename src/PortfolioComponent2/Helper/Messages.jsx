import emailjs from "emailjs-com";
import { Form, Input, Button, notification } from "antd";
import { MessageOutlined, SendOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export default function Messages() {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const handleSendEmail = (values) => {
    if (!values.email || !values.messages) {
      notification.error({
        message: "Opps",
        description: "Please fill the input fields",
      });
      return;
    }

    const emailParams = {
      to_name: "Md Faizan",
      from_name: values.email,
      message: values.messages,
      from_email: values.email,
    };

    emailjs
      .send(
        "faizanservice11",
        "template_t8n37l5",
        { ...emailParams },
        "nofDJb3u1FkZQ7btt"
      )
      .then((response) => {
        notification.success({
          message: "Email Sent",
          description: "Your message has been sent successfully!",
        });
        form.resetFields();
      })
      .catch((error) => {
        notification.error({
          message: "Error Sending Email",
          description:
            "There was an error sending your message. Please try again.",
        });
      });
  };

  const openNotification = () => {
    // console.log("click");
    api.open({
      message: "",
      description: (
        <Form form={form} layout="vertical" onFinish={handleSendEmail}>
          <Form.Item label="Message" name="messages">
            <Input.TextArea placeholder="Enter your message" rows={3} />
          </Form.Item>

          <Form.Item label="Your Email" name="email">
            <Input placeholder="Enter your email" />
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
      duration: 15,
      placement: "topRight",
      // showProgress: true,
      // pauseOnHover: true,
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
