import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import "./login.scss";
import {
  handleMainScreen,
  setCurrentUserDetails,
  handleHomeScreenSection,
  handleSubContentScreenSection,
} from "../../actions/actions";
const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(setCurrentUserDetails(values));
    dispatch(handleMainScreen("main"));
    dispatch(handleHomeScreenSection("create"));
    dispatch(handleSubContentScreenSection("actors"));
    message.success(`Welcome ${values.email}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h3>Sign In</h3>
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="formWrapper__secondary">
          <span>
            New here ?{" "}
            <a onClick={() => dispatch(handleMainScreen("signUp"))}>Sign up</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
