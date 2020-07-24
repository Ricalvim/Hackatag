import React from 'react';
import { Typography, Button } from 'antd';
import { connect } from 'react-redux';
import history from '../../services/history';
import api from '../../services/api';
const { Paragraph, Title } = Typography;
// import { Container } from './styles';

function Payment({ ticket, user }) {
  const { profile } = user;
  const handlePayment = async () => {
    try {
      await api.post(`/ticket/${ticket.id}/buy`, {
        costumerId: profile.id
      });
      history.push('/usuarios/meus-ingressos');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Title level={4} >
        Como você prefere pagar?</Title>
      <br />
      <Button className="bkg-success" onClick={handlePayment}>
        Efetuar Compra</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Payment);