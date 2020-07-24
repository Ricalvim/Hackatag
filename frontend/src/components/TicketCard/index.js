import React, { useState } from 'react';
import QRCodeModal from '../QRCodeModal';
import { Typography, Button } from 'antd';
import { Card } from './styles';
import moment from 'moment';

const { Title, Paragraph, Text } = Typography;

function TicketCard({ event }) {
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQR = () => {
    setShowQRCode(!showQRCode);
  }

  return (
    <>
      <Card>
        <div className="cover" style={{
          backgroundImage: `url(${event.image})`,
          borderTopLeftRadius: 14, borderBottomLeftRadius: 14
        }}></div>
        <div className="description">
          <Title level={3}>{event.name}</Title>
          <Paragraph className="success">{moment(event.dateEvent).format('DD/MM/YY [às] HH:mm')}</Paragraph>
          <Text>Endereço</Text>
          <br />
          <Text>{event.address}</Text>
        </div>
        <div className="tickets">
          <Button className="btn-blue" onClick={toggleQR}>{event.tickets.length} ingresso{event.tickets.length > 1 ? 's' : ''}</Button>
        </div>
      </Card>
      <QRCodeModal
        visible={showQRCode}
        tickets={event.tickets}
        event={event}
        setShowQRCode={setShowQRCode} />
    </>
  );
}

export default TicketCard;