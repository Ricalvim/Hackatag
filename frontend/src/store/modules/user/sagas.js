import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updadeProfile({ payload }) {
  const { id, name, email, ...rest } = payload.data;

  const profile = Object.assign(
    { id, name, email },
    rest.oldPassword || rest.verify_account_code ? rest : {},
  )

  try {
    let response;
    if (profile.verify_account_code) {
      response = yield call(api.post, 'verify-account', profile);
    } else {
      response = yield call(api.put, 'users', profile);
    }

    yield put(updateProfileSuccess(response.data));

    if (profile.verify_account_code) {
      history.push('/dashboard');
    } else {
      toast.success('Informações atualizadas com sucesso');
    }


  } catch (err) {
    if (err.response.data.error === 'Validation fails') {
      toast.error('Dado Inválido');
    } else if (err.response.data.error === 'Verify code does not match') {
      toast.error('Código de verificação inválido');
    } else {
      toast.error('Ops! Não foi possível atualizar seu perfil');
    }
    yield put(updateProfileFailure());
  }
}


export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updadeProfile)
]);
