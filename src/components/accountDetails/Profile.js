import React from "react";
import userImg from "../../assets/images/userIcon.png";
import { EditOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
const Profile = () => {
  return (
    <div className="profileWrapper">
      <div className="profileWrapper__userAvatar">
        <img src={userImg} />
        <div>
          <EditOutlined />
        </div>
      </div>
      <div className="profileWrapper__userForm">
        <Form
          name="basic"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <div className="profileWrapper__userForm--nameFields">
            <Form.Item
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              label="First Name"
              name="firstName"
              rules={[
                {
                  type: "firstName",
                  required: true,
                  message: "Please enter first name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              label="Last Name"
              name="lastName"
              rules={[
                {
                  type: "lastName",
                  required: true,
                  message: "Please enter last name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{
                width: "253px",
              }}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
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
          </div>

          <Form.Item style={{ marginTop: "2rem" }}>
            <Button className="saveBtn" htmlType="submit" size="medium">
              Save changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
