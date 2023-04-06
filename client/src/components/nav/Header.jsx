import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

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
      className='d-flex justify-content-between'
    >
      <div>
        <Item key='home' icon={<AppstoreOutlined />}>
          Home
        </Item>

        <SubMenu icon={<SettingOutlined />} title='Username'>
          <Item key='setting:1'>Op 1</Item>
          <Item key='setting:2'>Op 2</Item>
        </SubMenu>
      </div>
      <div>
        <Item key='register' icon={<UserAddOutlined />}>
          Register
        </Item>

        <Item key='login' icon={<UserOutlined />}>
          Login
        </Item>
      </div>
    </Menu>
  );
};
export default Header;
