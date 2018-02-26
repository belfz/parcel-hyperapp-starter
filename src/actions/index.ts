import { State } from '../state';

export type Actions = {
  incrementBy: (by: number) => (state: State) => { count: number };
};

const actions: Actions = {
  incrementBy: (by: number) => (state: State) => ({ count: state.count + by })
};

export default actions;
