import { Effect, Reducer } from 'umi';

export interface IState {
  count: number;
}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    plus: Effect;
  };
  reducers: {
    plusOne: Reducer<IState>;
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: 'Count',
  state: {
    count: 7,
  },

  effects: {
    *plus(_, { call, put }) {
      console.log(_);
      yield put({ type: 'plusOne', });
    },
  },

  reducers: {
    plusOne(state: any, { payload }: any) {
      return {
        ...state,
        count: state.count + 1,
      };
    },

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
