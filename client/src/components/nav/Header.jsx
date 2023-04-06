import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode='horizontal'
      className='d-block'
    >
      <Item key='home' icon={<AppstoreOutlined />}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </Item>

      <SubMenu icon={<SettingOutlined />} title='Username'>
        <Item key='setting:1'>Op 1</Item>
        <Item key='setting:2'>Op 2</Item>
      </SubMenu>
      <Item
        key='register'
        style={{ float: 'right' }}
        icon={<UserAddOutlined />}
      >
        <Link to='/register' style={{ textDecoration: 'none' }}>
          Register
        </Link>
      </Item>

      <Item key='login' style={{ float: 'right' }} icon={<UserOutlined />}>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          Login
        </Link>
      </Item>
    </Menu>
  );
};
export default Header;
