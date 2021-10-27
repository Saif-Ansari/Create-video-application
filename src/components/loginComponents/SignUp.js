import React from "react";
import { Form, Input, Button, message } from "antd";
import "./login.scss";
import { useDispatch } from "react-redux";
import { handleMainScreen } from "../../actions/actions";
const SignUp = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(handleMainScreen("login"));
    message.success("Account created successfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h3>Create an account</h3>
      <div className="formWrapper">
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 8,
            }}
          >
            <Button
              style={{
                backgroundColor: "#46B13D",
                color: "#fff",
                marginTop: "1rem",
              }}
              htmlType="submit"
              size="medium"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="formWrapper__secondary">
          <span>
            Already user ?{" "}
            <a onClick={() => dispatch(handleMainScreen("login"))}>Sign in</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
