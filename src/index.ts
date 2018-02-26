import { app } from 'hyperapp';
import state from './state';
import actions from './actions';
import App from './views/App';

app(state, actions, App, document.getElementById('app'));
