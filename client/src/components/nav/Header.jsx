import { useState } from 'react';
import {
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to={'/'}>Home</Link>,
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
    label: <Link to={'/login'}>Login</Link>,
    key: 'login',
    icon: <UserOutlined />,
    className: 'ms-auto',
  },
  {
    label: <Link to={'/register'}>Register</Link>,
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
