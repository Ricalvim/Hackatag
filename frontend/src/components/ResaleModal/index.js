import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Typography, Form, Radio } from 'antd';
import IntlCurrencyInput from 'react-intl-currency-input';
import api from '../../services/api';
import { currencyConfig } from '../../util/currencyInput';

const { Paragraph } = Typography;

function ResaleModal({ visible, setShowResaleModal, ticket }) {
  const [amount, setAmount] = useState(0);
  const [partial, setPartial] = useState(0);
  const [link, setLink] = useState('');
  const [publicTicket, setPublicTicket] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAmount = ({ target }) => {
    const { value } = target;
    const price = Number(value.replace('R$', '').replace(',', '.')) * 1000;
    setAmount((price + 0.1 * price) / 100);
    setPartial((price) / 100);

  }

  const handlePartial = ({ target }) => {
    const { value } = target;
    const price = Number(value.replace('R$', '').replace(',', '.')) * 1000;
    setPartial((price / 1.1) / 100);
    setAmount((price) / 100);
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await api.post(`/ticket/${ticket.id}/resale`, {
        'price': partial * 100,
        'publicStatus': publicTicket
      });
      setLoading(false);
      ticket.resale = true;
      setLink(`https://blacktag.com.br/revendas?ticket=${ticket.id}`);
    } catch (err) {
      setLoading(false);
      console.log(err.response);
    }
  }

  return (
    <Modal
      visible={visible}
      title="Revender Ingresso"
      okText="Confirmar"
      onOk={handleSubmit}
      onCancel={() => { setShowResaleModal(false) }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Você recebe"
          initialValue={partial / 100}>
          <IntlCurrencyInput
            className="inputmask"
            currency="BRL"
            config={currencyConfig}
            onChange={handleAmount}
            value={partial}
          />
        </Form.Item>
        <Form.Item
          label="O comprador paga"
          initialValue={amount / 100}>
          <IntlCurrencyInput
            className="inputmask"
            currency="BRL"
            config={currencyConfig}
            onChange={handlePartial}
            value={amount}
          />
        </Form.Item>
        <Form.Item
          initialValue={publicTicket}
          label="Modo de Publicação"
          name="public">
          <Radio.Group buttonStyle="outline" onChange={(value) => { setPublicTicket(value) }}>
            <Radio.Button value={true}>Público</Radio.Button>
            <Radio.Button value={false}>Link Privado</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {loading && (<p>Carregando</p>)}
        {link && (
          <>
            <Paragraph>Link de Acesso:</Paragraph>
            <Link to={link}>{link}</Link>
          </>
        )}
      </Form>
    </Modal>
  );
}

export default ResaleModal;