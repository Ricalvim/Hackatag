import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { Nav, Header } from './styles';
import logo from '../../assets/img/logo_header.png';
import FormLogin from '../FormLogin';
import MenuOptions from '../MenuOptions';
import { Button, Modal, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import history from '../../services/history';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { signed } = store.getState().auth;

  history.listen((location, action) => {
    setShowModal(false);
    setShowMenu(false);
  });

  useEffect(() => {
    if (window.innerWidth > 900) {
      setShowMenu(true);
    }
  }, []);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Header>
      <Nav className="container">
        <img src={logo} alt="" />
        <div className="menu-icon">
          <MenuOutlined onClick={toggleMenu} />
        </div>

        {/* <ul className={`menu hide`}> */}
        <ul className={`menu ${showMenu ? '' : 'hide'}`}>
          <li>
            <Link to='/'>Eventos</Link>
          </li>
          <li>
            <Link to='/'>Sobre Nós</Link>
          </li>
          <li>
            <Link to='/'>Promova Seu Evento</Link>
          </li>
          <li>
            <Link to='/'>Formaturas</Link>
          </li>
          <li>
            <Link to='/revendas'>Revendas</Link>
          </li>
          {!signed ? (
            <li>
              <Button type="primary" onClick={toggleModal}>Entrar</Button>
            </li>)
            : (
              <li>
                <Dropdown
                  overlay={<MenuOptions />}
                  placement="bottomRight"
                  trigger={['click']}>
                  <Button className="bkg-success">Minha Área</Button>
                </Dropdown>
              </li>
            )}
        </ul>
      </Nav>

      <Modal
        visible={showModal}
        footer={null}
        style={{ maxWidth: 300 }}
        onCancel={toggleModal}>
        <FormLogin />
      </Modal>
    </Header>
  );
}

export default Navbar;