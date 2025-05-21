import React, { memo, useState } from "react";
import { Button, Form, Input, Typography, message, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [submitData, setSubmitData] = useState(null);

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    setSubmitData(values);
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/login");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setSubmitData(null);
    console.log(submitData);
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
        content: "Registration successful!",
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="max-w-[400px] w-full border border-gray-300 rounded-lg p-4">
        <Title level={3}>Sign Up</Title>
        {submitData && contextHolder}
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                label="Ism"
                name="Ism"
                rules={[{ required: true, message: "Iltimos Ism kriting!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Sharif"
                name="Sharif"
                rules={[{ required: true, message: "Iltimos Sharif kriting!" }]}
              >
                <Input />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Familiya"
                name="Familiya"
                rules={[
                  { required: true, message: "Iltimos Familiya kriting!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Yosh"
                name="Yosh"
                rules={[{ required: true, message: "Iltimos Yosh kriting!" }]}
              >
                <InputNumber min={1} max={10} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Iltimos Password kriting!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>
          </div>

          <Form.Item label={null}>
            <Button
              onClick={openMessage}
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
export default memo(Register);
