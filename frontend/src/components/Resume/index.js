import React, { useEffect } from 'react';
import { Table, Typography, Button } from 'antd';
import { columns } from '../../util/tableColumns';
import { formatPrice } from '../../util/format';

const { Paragraph } = Typography;

function Resume({ setStep, ticket }) {
  return (
    <>
      <Table dataSource={[ticket]} columns={columns} pagination={false} />
      <br />
      <div style={{ backgroundColor: '#d0d0d0', padding: 15 }}>
        <Paragraph>Total em Ingresso(s): {formatPrice(ticket.valor / 100)}</Paragraph>
        <Paragraph>Total em Taxa(s): {formatPrice(ticket.valor / 1000)}</Paragraph>
        <Paragraph>Total: {formatPrice(ticket.valor * 1.1 / 100)}</Paragraph>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="bkg-success"
          onClick={() => { setStep(3) }}>Continuar</Button>
      </div>
    </>
  );
}

export default Resume;