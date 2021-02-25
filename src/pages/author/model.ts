import { Effect, Reducer } from 'umi';
import axios from 'axios';
import {QueryCreateAuthors, QueryDeleteAuthors} from './query';


export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    getAuthors: Effect;
    createAuthors: Effect;
    delAuthors: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const post = (url: string) => axios({url: `http://localhost:5000/${url}`, method: 'POST',
}).then(res=>res.data)
  .catch(err=>err);

const callGetAuthors = () => post('author/search');



const Model: IModel = {
  namespace: 'Author',
  state: {},

  effects: {
    *getAuthors(_, { call, put }) {
      const data = yield call(callGetAuthors);
      yield put({ type: 'save', payload: { list: data }});
    },
    *createAuthors({payload}, { call, put }) {
      console.log(payload)
      yield call(QueryCreateAuthors, payload);
      yield put({ type: 'save', });
    },



    *delAuthors(payload, { call, put }) {
      console.log(payload.payload)
      yield call(QueryDeleteAuthors, payload.payload);
      yield put({ type: 'save'});
      yield put({ type: 'getAuthors' });
    },
  },

  reducers: {
      save(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },

    set(state: any, { payload }: any) {
      return payload;
    },
  },
};

export default Model;
