import { useState } from 'react';
import {
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'More',
    key: 'more',
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
  {
    label: 'Login',
    key: 'login',
    icon: <UserOutlined />,
    className: 'ms-auto',
  },
  {
    label: 'Register',
    key: 'register',
    icon: <UserAddOutlined />,
  },
];

const Header = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
      className={items.className}
    />
  );
};

export default Header;
