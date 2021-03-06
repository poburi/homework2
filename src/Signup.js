import React from "react";
import styled from "styled-components";
import { Form, Button, Select, Input, Radio, Switch } from "antd";
// import { Helmet } from "react-helmet";
import "antd/dist/antd.css";
import "./index.css";
import "./common.css";

function NormalLoginForm(props) {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const getYears = new Date().getUTCFullYear();
  const YearsStart = getYears - 120;
  const yearsData = [];

  for (let i = 0; i <= 120; i++) {
    yearsData[i] = YearsStart + i;
  }

  const monthData = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];

  const daysData = [];

  for (let i = 0; i <= 30; i++) {
    daysData[i] = 1 + i;
  }

  const { getFieldDecorator } = props.form;

  return (
    <JoinForm>
      {/* <Helmet>
        <title>카카오페이 - 리액트 회원가입 페이지</title>
      </Helmet> */}
      <Title>회원가입</Title>
      <Form layout="vertical" className="login-form">
        <div className="set-box">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "아이디를 입력해주세요!" }]
            })(<Input placeholder="아이디" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "비밀번호를 입력해주세요!" }]
            })(<Input type="password" placeholder="비밀번호" />)}
          </Form.Item>
        </div>

        <Form.Item>
          <Radio.Group
            className="gender-wrap"
            defaultValue="male"
            buttonStyle="solid"
          >
            <Radio.Button value="male">남자</Radio.Button>
            <Radio.Button value="female">여자</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <LabelWrapper className="set-box">
          <Form.Item label="생일">
            <Select defaultValue="2020" onChange={handleChange}>
              {yearsData.reverse().map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select defaultValue="01" onChange={handleChange}>
              {monthData.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select defaultValue="01" onChange={handleChange}>
              {daysData.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="전화" className="inp-add-btn">
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "전화번호를 입력해주세요!" }]
            })(
              <Input
                className="inp"
                addonBefore={<PhoneSelect onChange={handleChange} />}
              />
            )}

            <Button className="btn btn-certify">인증</Button>
          </Form.Item>
        </LabelWrapper>

        <Form.Item>
          <TermAgree>
            <label>모든 약관 내용에 동의합니다.</label>
            <Switch />
          </TermAgree>
        </Form.Item>

        <Button size={"large"} block type="primary" htmlType="submit">
          가입하기
        </Button>
      </Form>
    </JoinForm>
  );
}

const PhoneSelect = props => {
  const { Option } = Select;
  const frontNum = ["010", "011", "016", "017", "019"];
  return (
    <Select
      className="front-num"
      labelInValue
      defaultValue={{ key: "010" }}
      onChange={props.onChange}
    >
      {frontNum.map((item, index) => (
        <Option key={index} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

const titleText = 24;

const JoinForm = styled.div`
  position: relative;
  padding: 20px;
  height: 100vh;

  .set-box {
    .ant-row:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .gender-wrap {
    display: flex;
    flex-wrap: wrap;

    label {
      flex: 1;
      text-align: center;
    }
  }
`;

const Title = styled.h2`
  font-size: ${titleText}px;
  margin-bottom: 30px;
`;

// const CertifyBtn = styled.span`
//   flex: 1 0 auto;

//   .btn-certify {
//     width: 100%;
//   }
// `;

const LabelWrapper = styled.div`
  .ant-form-item {
    display: flex;
    flex-wrap: wrap;
    align-items: start;

    .ant-form-item-label {
      flex: 0 0 40px;
      text-align: left;
      padding-top: 5px;
      padding-bottom: 0;
    }

    .ant-form-item-required {
      &:before {
        display: none;
      }
    }

    .ant-form-item-control-wrapper {
      flex: 1;

      .ant-form-item-children {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .inp {
          flex: 1;
          padding-right: 10px;
        }

        .ant-select {
          flex: 1;
        }

        .ant-select + .ant-select {
          padding-left: 10px;
        }
      }
    }
  }
`;

const TermAgree = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Signup = Form.create({ name: "normal_login" })(NormalLoginForm);

export default Signup;
