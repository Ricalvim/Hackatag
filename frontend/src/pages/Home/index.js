import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Statistic, Card, Row, Col, DatePicker } from 'antd';
import img from '../../assets/img/events.png';
function Home() {
  return (
    <div style={{ backgroundColor: 'rgb(235,235,235)' }}>
      <div className="container" >
        <img src={img} alt="" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Home;