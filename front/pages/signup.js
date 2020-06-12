import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

import Header from '../components/Header';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const SignupButtonDiv = styled.div`
  margin-top: 10px;
`;

const ErorrMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(true);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(`id : ${id}, nickname: ${nickname}, temr: ${term}`)
  }, [password, passwordCheck, term]);

  return (
    <Header>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
        </div>
        {passwordError && <ErorrMessage>비밀번호가 일치하지 않습니다.</ErorrMessage>}
        <div>
           <Checkbox name="user-term" check={term} onChange={onChangeTerm}> 제로초 말을 잘 들을 것을 동의합니다</Checkbox>
           {termError && <ErorrMessage>약관에 동의하셔야 합니다.</ErorrMessage>}
        </div>
        <SignupButtonDiv>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </SignupButtonDiv>
      </Form>
    </Header>
  );
};

export default Signup;