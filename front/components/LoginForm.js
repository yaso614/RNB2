import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { loginAction } from '../reducers/user';

const SubmitForm = styled(Form)`
  padding: '10px';
`;

const LoginDiv = styled.div`
  margin-top: '10px';
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback((e) => {
    console.log(`id: ${id}, password: ${password}`);
    dispatch(loginAction({ id, password}));
  }, [id, password]);

  return (
    <SubmitForm onFinish={onSubmitForm} >
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id}  onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>

      <LoginDiv>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </LoginDiv>

    </SubmitForm>
  );
};

export default LoginForm;
