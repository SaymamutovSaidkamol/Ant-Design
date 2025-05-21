import React, { memo, useState } from "react";
import { Button, Form, Input, Typography, message, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [submitData, setSubmitData] = useState(null);

  const navigate = useNavigate();

  const onFinish = (values) => {
    const userRaw = localStorage.getItem("user");
    if (!userRaw) {
      messageApi.error("Foydalanuvchi topilmadi");
      setSubmitData("Error");
      return;
    }

    const user = JSON.parse(userRaw);

    if (user.Ism === values.username && user.password === values.password) {
      console.log("Login success");
      setSubmitData(values);
      openMessage();
      navigate("/data");
    } else {
      console.log("Login error");
      setSubmitData("Error");
      messageApi.error("Username yoki parol noto‘g‘ri!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setSubmitData(null);
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Login successful!",
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="max-w-[400px] w-full border border-gray-300 rounded-lg p-4">
        <Title level={3}>Sign in</Title>
        {submitData && submitData !== "Error" && contextHolder}
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Iltimos Username kriting!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Iltimos Password kriting!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              onClick={() => openMessage()}
              type="primary"
              className="w-full"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default memo(Login);
