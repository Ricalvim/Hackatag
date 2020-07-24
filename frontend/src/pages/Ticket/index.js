import React, { useState, useEffect } from 'react';
import { Typography, Empty } from 'antd';
import { connect } from 'react-redux';
import TicketCard from '../../components/TicketCard';
import api from '../../services/api';

const { Title, Text, Paragraph } = Typography;

function Ticket({ user }) {
  const { profile } = user;
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/user/${profile.id}/tickets`);
        setCards(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <section className="container">
        <Title level={1}>Meus Ingressos</Title>
      </section>
      <section className="bkg-light padding-y">
        <div className="container">
          <Paragraph>Clique no número de ingresso(s) para visualizar os qrcodes.</Paragraph>
          {cards.map(card => (<TicketCard key={card.id} event={card} />))}
          {cards.length === 0 && (<Empty description="Você não possui nenhum ingresso" />)}
        </div>
      </section>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Ticket);