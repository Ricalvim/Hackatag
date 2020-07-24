import React from 'react';
import { formatPrice } from './format';
export const columns = [
  {
    title: 'Setor',
    dataIndex: 'setor',
    key: 'setor',
  },
  {
    title: 'Lote',
    dataIndex: 'lote',
    key: 'lote',
  },
  {
    title: 'Valor',
    dataIndex: 'valor',
    key: 'valor',
    sorter: (a, b) => a.valor - b.valor,
    render: (e) => <span>{formatPrice(e / 100)}</span>
  }
]