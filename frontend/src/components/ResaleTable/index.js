import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { store } from '../../store';
import { Table, Button, Collapse, Input, Empty } from 'antd';
import EventCard from '../../components/EventCard';
import { columns } from '../../util/tableColumns';
const { Panel } = Collapse;

const dataSource = [];


function ResaleTable({ setStep, setSelectedTicket }) {
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);
  const [columnsAux, setColumnsAux] = useState();
  const { signed } = store.getState().auth;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/tickets/resale`);
        setEvents(data);
        setData(data);
        data.map(event => {
          event.tickets.map(ticket => {
            ticket.key = ticket.id;
            ticket.setor = 'Pista';
            ticket.lote = ticket.batch.name;
            ticket.valor = ticket['resale-price'];
          })
        });
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setColumnsAux([...columns, {
      title: 'Comprar',
      dataIndex: 'comprar',
      key: 'comprar',
      render: (text, record, index) => <Button
        onClick={() => { selectTicket({ record }) }}
        className="bkg-success">Comprar</Button>
    }]);
  }, []);

  const selectTicket = ({ record }) => {
    if (signed) {
      setStep(2);
    } else {
      setStep(1);
    }
    setSelectedTicket(record);
  }

  const handleSearch = ({ target }) => {
    const { value } = target;
    if (value === '') {
      setEvents(data);
    } else {
      const filtered = data.filter(e =>
        e.name.toLowerCase().includes(value.toLowerCase()));
      setEvents(filtered);
    }
  }
  return (
    <>

      {events.length !== 0 && (
        <>
          <Input placeholder="Buscar Evento" style={{ width: 200 }}
            onChange={handleSearch} />
          <br /> <br />
          <Collapse accordion>
            {events.map((event, i) => (
              <Panel header={<EventCard event={event} />} key={i}>
                <Table dataSource={event.tickets} columns={columnsAux} pagination={false} />
              </Panel>
            ))}
          </Collapse>
        </>)}
      {events.length === 0 && (<Empty description="Não existem ingressos disponíveis para revenda" />)}
    </>
  );
}

export default ResaleTable;