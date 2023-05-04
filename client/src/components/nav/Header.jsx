import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Register',
    key: 'register',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};

export default Header;
