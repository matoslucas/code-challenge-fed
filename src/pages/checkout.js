import { Fragment } from "react"
import Link from "next/link"

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd"


const { Option } = Select

const CustomForm = (props) => {
  const { getFieldDecorator } = props.form
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "86",
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  )

  return (
    <div id="checkout">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label={<span>First Name</span>}>
          {getFieldDecorator("firtsname", {
            rules: [
              {
                required: true,
                message: "Please input your first name",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label={<span>Last Name</span>}>
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                message: "Please input your last name",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" },
            ],
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a State"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="KY">Kentucky</Option>
          <Option value="UT">Utah</Option>
          <Option value="NY">New York</Option>
        </Select>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked",
          })(
            <Checkbox>
              I agree to the <a href="">terms and conditions</a>
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
          Check Out
          </Button>
        </Form.Item>
      </Form>
      <p>
        <Link href="/">
          <a>Continue shopping</a>
        </Link>
      </p>
      <style jsx>{`
        #checkout {
          margin: 0 auto;
          max-width: 640px;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  )
}
export default Form.create({ name: "checkout" })(CustomForm)
