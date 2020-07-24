import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      <section>
        {children}
      </section>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
