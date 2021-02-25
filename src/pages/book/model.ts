import { Effect, Reducer } from 'umi';
import axios from 'axios';
import {QueryCreateBooks, QueryDeleteBooks} from './query';


export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    getBooks: Effect;
    createBooks: Effect;
    delBook: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const post = (url: string) => axios({url: `http://localhost:5000/${url}`, method: 'POST',
}).then(res=>res.data)
  .catch(err=>err);

const callGetBooks = () => post('book/search');
 // const callCreateBooks = (payload: any) => axios({url: 'http://localhost:5000/book', method: "POST",
 // }).then(res => res.data)
 //   .catch(err => err);

// const deleteBookById = (payload: any) => axios({url: `http://localhost:5000/book/${payload}`, method: "DELETE"
// }).then(res => res.data)
//   .catch(err => err);



const Model: IModel = {
  namespace: 'Book',
  state: {},

  effects: {
    *getBooks(_, { call, put }) {
      const data = yield call(callGetBooks);
      yield put({ type: 'save', payload: { list: data }});
    },
    *createBooks(payload, { call, put }) {
      console.log(payload, 'payload create')
      const createResult  = yield call(QueryCreateBooks, payload);
      if (!(createResult instanceof Error)) {
      yield put({ type: 'getBooks'});
      }
    },


    *delBook(payload, { call, put }) {
      console.log(payload.payload)
      yield call(QueryDeleteBooks, payload.payload);
      yield put({ type: 'getBooks' });
      yield put({ type: 'save', });
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
