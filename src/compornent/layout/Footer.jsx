import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        // Add your styles here
      }}
    >
      FPT University ©2023
    </Footer>
  );
};

export default AppFooter;
