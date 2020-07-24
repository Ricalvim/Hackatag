import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure, signUpFailure, signUpSuccess } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/login', {
      email,
      password
    });

    const { token, name, id } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess({ token, user: { name, id, email } }));
    history.push('/usuarios/meus-ingressos');

  } catch (err) {
    console.log(err.data);
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, birthdate, email, password } = payload;

    const response = yield call(api.post, '/users', {
      name,
      birthdate,
      email,
      password
    });

    const { token, user } = response.data;

    console.log({ token, user });
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signUpSuccess({ token, user }));

    history.push('/verify-account');
  } catch (err) {
    // if (err.response.data.error === 'User already exists') {
    //   toast.error('Esse usuário já existe');
    // }
    yield put(signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
])