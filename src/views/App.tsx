import { h } from 'hyperapp';
import { Actions } from '../actions';
import { State } from '../state';
import Incrementer from './Incrementer';

export default (state: State, actions: Actions) => {
  return (
    <div>
      <p>{state.count}</p>
      <Incrementer onIncrement={actions.incrementBy} />
    </div>
  );
};
