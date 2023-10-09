import React from 'react';
import {Card, Layout } from 'antd';
import {GOOGLE_AUTH_URL} from '../../constant/constain.jsx'
const { Content } = Layout;

const Login = () => {

  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: 300, textAlign: 'center' }}>
          <h3>Login to Your Account</h3>
          <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                   Log in with Google</a>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
