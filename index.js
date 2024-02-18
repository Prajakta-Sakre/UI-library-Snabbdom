
import { createApp } from '../ui-library';
import {h} from 'snabbdom';

const template = (state, updateState) =>
  h('div', [
    h('h1', state.count),
    h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
  ]);

const container = document.getElementById('app');
createApp(container, template);
