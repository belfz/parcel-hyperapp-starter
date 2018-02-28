import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import App from './views/App';

app(state, actions, App, document.getElementById('app'));
