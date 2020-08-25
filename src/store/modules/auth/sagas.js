import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import api from '../../../services/api';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const { data } = yield call(api.post, '/login', payload);

    yield put(actions.loginSuccess({ ...data }));

    toast.success('Login efetuado.');

    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
