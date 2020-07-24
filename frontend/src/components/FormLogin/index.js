import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { signInRequest, disableLoader } from '../../store/modules/auth/actions';
import { Button, Form, Input } from 'antd';
// import { Container } from './styles';

function FormLogin({ auth }) {
  const dispatch = useDispatch();
  const { loading } = auth;

  useEffect(() => {
    dispatch(disableLoader());
  }, []);

  const handleSubmit = ({ email, password }) => {
    if (loading) {
      return;
    }
    dispatch(signInRequest({ email, password }));
  }

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <br />
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Este campo é obrigatório' }]}>
        <Input placeholder="Digite seu e-mail" autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Este campo é obrigatório' }]}>
        <Input placeholder="Digite sua senha" type="password" />
      </Form.Item>
      <Form.Item>
        <Button block htmlType="submit" loading={loading}
          style={{ border: 0, backgroundColor: '#378dcc', color: '#fff' }}>Entrar</Button>
      </Form.Item>
    </Form >
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  authLoading: state.auth.loading
});

export default connect(mapStateToProps)(FormLogin);