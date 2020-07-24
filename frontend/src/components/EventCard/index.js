import React from 'react';
import { Typography, Button } from 'antd';
import { Card } from './styles';
import moment from 'moment';

const { Title, Paragraph, Text } = Typography;

function EventCard({ event }) {
  return (
    <Card>
      <div className="cover" style={{ backgroundImage: `url(${event.image})` }}></div>
      <div className="description">
        <Title level={3}>{event.name}</Title>
        <Paragraph className="success">{moment(event.dateEvent).format('DD/MM/YY [às] HH:mm')}</Paragraph>
        <Text>Endereço</Text>
        <br />
        <Text>{event.address}</Text>
      </div>
    </Card>
  );
}

export default EventCard;