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

    return history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos.');

    return yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  try {
    yield call(api.post, '/users', payload);

    yield put(actions.registerSuccess());

    toast.success('Cadastro efetuado com sucesso.');

    return history.push('/login');
  } catch (error) {
    if (error.isAxiosError) {
      const { errors } = error.response.data;

      toast.error('Cadastro não efetuado.');
      errors.forEach(error => toast.error(error));
    } else toast.error('Houve um problema.');

    return yield put(actions.registerFailure());
  }
}

function* editRequest({ payload }) {
  const { id, ...data } = payload;

  try {
    yield call(api.put, '/users', data);

    yield put(actions.editSuccess(data));

    return toast.success('Dados alterados com sucesso.');
  } catch (error) {
    if (error.isAxiosError) {
      const { errors } = error.response.data;

      if (error.response.status === 401) {
        toast.error('Você precisa fazer login.');
        yield put(actions.loginFailure());
        return history.push('/login');
      }

      toast.error('Alteração não efetuada.');
      errors.forEach(error => toast.error(error));
    } else toast.error('Houve um problema.');

    return yield put(actions.editFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.EDIT_REQUEST, editRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
