import React, { Component } from "react";
import { DETAIL_LINK } from "actions/types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../actions/actionCreator";
import Axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Index extends Component {
  componentDidMount() {
    console.log(this.props, "this.props2");
    this.getData();
  }
  getData() {
    Axios.get("/user-data").then((result) => {
      console.log(result, "result");
    });
  }
  onFinish = (values) => {
    console.log("Success:", values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <>
        <div>hh</div>
        <h2>当月工资为{this.props.tiger}</h2>
        <button onClick={PayIncrease}>升职加薪</button>
        <button onClick={PayDecrease}>迟到罚款</button>
        <Link to={DETAIL_LINK}>DETAIL</Link>
        <Button type="primary">Button</Button>
        <hr />
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item label="Username">
            <Form.Item
              name="username"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <span>description</span>
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

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, "state");
  const { tiger } = state.auth;
  return {
    tiger: tiger,
  };
}
function mapDispatchToProps(dispatch) {
  // return {
  //   PayIncrease: () => dispatch({ type: "涨工资" }),
  //   PayDecrease: () => dispatch({ type: "扣工资" })
  // };
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
