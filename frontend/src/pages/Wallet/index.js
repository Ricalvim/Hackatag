import React, { useState, useEffect } from 'react';
import { Typography, Steps, Button } from 'antd';
import { connect } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
const { Title, Text, Paragraph } = Typography;

function Wallet({ user }) {
  const [balance, setBalance] = useState(0);
  const { profile } = user;
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/user/${profile.id}/balance`);
        const { balance } = data;
        setBalance(balance);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  return (
    <div>
      <section className="container">
        <Title level={1}>Minha Carteira</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Text>Saldo total</Text>
            <Title style={{ textAlign: 'left', marginTop: 0 }}>{formatPrice(balance / 100)}</Title>
          </div>
        </div>
        <br />
      </section>
      <section className="bkg-light">
        <div className="container padding-y">
          <Paragraph>Você ainda não possui nenhuma transação na sua carteira.</Paragraph>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);