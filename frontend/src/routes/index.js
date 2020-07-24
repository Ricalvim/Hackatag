import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Ticket from '../pages/Ticket';
import Revenda from '../pages/Revenda';
import Wallet from '../pages/Wallet';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/usuarios/meus-ingressos" exact component={Ticket} isPrivate />
      <Route path="/usuarios/carteira" exact component={Wallet} isPrivate />
      <Route path="/revendas" exact component={Revenda} />


    </Switch >
  );
}
