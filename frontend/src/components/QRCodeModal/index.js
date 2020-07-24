import React, { useState } from 'react';
import { Modal, Button, Typography, Tag } from 'antd';
import moment from 'moment';
import { formatPrice } from '../../util/format';
import Countdown from 'react-countdown';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import QRCode from 'qrcode.react';
import ResaleModal from '../ResaleModal';
const { Paragraph, Text } = Typography;

function QRCodeModal({ visible, setShowQRCode, event, tickets }) {
  const [showResaleModal, setShowResaleModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({});
  const eventDate = moment(event.dateEvent);
  const today = moment().format('YYYY-MM-DD HH:mm');
  const duration = moment.duration(eventDate.diff(today));
  const hours = duration.asHours();
  const availableTime = moment(eventDate).subtract(2, 'H').format('YYYY-MM-DD HH:mm');

  const selectTicket = (ticket) => {
    setShowResaleModal(true);
    setSelectedTicket(ticket);
  }

  return (
    <Modal
      visible={visible}
      footer={null}
      title={event.name}
      style={{ maxWidth: 300 }}
      onCancel={() => { setShowQRCode(false) }}>
      <Carousel
        infiniteLoop={true}
        swipeable={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {tickets.map((ticket, i) => (
          <div style={{ color: '#fff' }} key={ticket.id}>
            {ticket.resale && !ticket.resold && (
              <Paragraph style={{ textAlign: 'center' }}>
                <Tag color="#cf6565" style={{ margin: 0 }}>Em Revenda</Tag>
              </Paragraph>
            )}
            <Text strong>Ingresso {i + 1}</Text>
            <Paragraph >
              {!ticket['already-resold']
                ? formatPrice(ticket.batch.price / 100)
                : `${formatPrice(ticket['resale-price'] / 100)} (Revenda)`} - {ticket.batch.name}
            </Paragraph>
            {!ticket.resold
              ? hours <= 2
                ? <QRCode value={ticket.code} size={170} />
                : <div className="countdown">
                  <QRCode value="" size={170} />
                  <div className="overlay">
                    <Paragraph >
                      Disponível em
                  <br />
                      <Countdown date={availableTime} daysInHours={true} />
                    </Paragraph>
                  </div>
                </div>
              : <div className="countdown">
                <QRCode value="" size={170} />
                <div className="overlay">
                  <Paragraph style={{ backgroundColor: "var(--error-color)" }}>
                    Ingresso Revendido
                  </Paragraph>
                </div>
              </div>
            }

            <br />
            <br />
            <Button shape="round" block disabled={hours > 2 || ticket.resold}>Imprimir Ingresso</Button>
            <br />
            <br />
            <Button shape="round" block disabled={ticket.resold}>Transferir Ingresso</Button>
            <br />
            <br />
            <Button shape="round" block
              disabled={ticket.resold || ticket['already-resold']}
              onClick={() => { selectTicket(ticket) }}>
              Revender Ingresso</Button>
          </div>
        ))}
      </Carousel>
      <ResaleModal
        ticket={selectedTicket}
        visible={showResaleModal}
        setShowResaleModal={setShowResaleModal} />
    </Modal>
  );
}

export default QRCodeModal;