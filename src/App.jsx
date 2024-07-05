import './App.css';
import { Button, Flex } from 'antd';
import { CiMenuBurger } from "react-icons/ci";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { SaveOutlined } from '@ant-design/icons';
import {  Form, Input } from 'antd';
function App() {
  return (
    <div>
    <div className="menu">
      <h2>refine project</h2>
      <hr /><br />
      <Button type="primary" >
      <CiMenuBurger />  &nbsp;&nbsp;&nbsp;Users
        </Button>
    </div>
    <div className="fle">
      <div className="lf">
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 1800,
      marginLeft: -350,
      paddingTop: 0,
      padding: 50,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      {/* <Checkbox>Remember me</Checkbox> */}
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     
    </Form.Item>
 </Form>








 <Form name="horizontal_login" className='ii' layout="inline">
 <div className="h2">
    <h3>skill-1</h3>
   </div>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <div className="h2">
    <h3>skill-2</h3>
   </div>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
   
      </Form.Item>
     
    </Form>
    <Button className='fg' type="dashed" >
    +&nbsp;&nbsp;&nbsp;Add a skill
    </Button>
    <hr />
    <Button required className='bb' type="primary" icon={<SaveOutlined />} >
            Save
          </Button>
  </div>
  </div>
    </div>
  );
}

export default App;
