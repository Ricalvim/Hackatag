import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import { UserOutlined, WalletOutlined, IdcardOutlined, CreditCardOutlined } from '@ant-design/icons';
// import { Container } from './styles';

function MenuOptions() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signOut());
  }
  return (
    <Menu>
      <Menu.Item>
        <Link to='/usuarios/meus-ingressos'><IdcardOutlined /> Meus Ingressos</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'><UserOutlined /> Meus Dados</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/usuarios/carteira'><WalletOutlined /> Minha Carteira</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'><CreditCardOutlined /> Meus Cartões</Link>
      </Menu.Item>
      <Menu.Item>
        <Button type="danger" block onClick={logout}>Sair</Button>
      </Menu.Item>
    </Menu>
  );
}

export default MenuOptions;