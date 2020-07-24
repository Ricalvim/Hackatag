import React, { useState } from 'react';
import ResaleTable from '../../components/ResaleTable';
import FormLogin from '../../components/FormLogin';
import Resume from '../../components/Resume';
import Payment from '../../components/Payment';
import { Typography, Steps } from 'antd';

const { Title } = Typography;
const { Step } = Steps;
// import { Container } from './styles';

function Revenda() {
  const [step, setStep] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState({});

  return (
    <div>
      <section className="container">
        <Title level={1}>Revenda de Ingressos</Title>
      </section>
      <section className="steps">
        <div className="container">
          <Steps current={step}>
            <Step title="Ingressos" onClick={() => { setStep(0) }} />
            <Step title="Identificação" onClick={() => { setStep(1) }} />
            <Step title="Resumo" onClick={() => { setStep(2) }} />
            <Step title="Pagamento" onClick={() => { setStep(3) }} />
          </Steps>
        </div>
      </section>
      <section className="bkg-light padding-y">
        <div className="container">
          {step === 0
            ? <ResaleTable setStep={setStep} setSelectedTicket={setSelectedTicket} />
            : step === 1
              ? (<div style={{ maxWidth: 300, margin: 'auto' }}>
                <FormLogin />
              </div>)
              : step === 2
                ? <Resume setStep={setStep} ticket={selectedTicket} />
                : <Payment ticket={selectedTicket} />
          }
        </div>
      </section>
    </div>
  );
}

export default Revenda;