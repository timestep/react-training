import React from 'react';
import ReactDOM from 'react-dom';

import CardListState from './components/CardListState';

const profiles = [
  {
    id: 1,
    name: 'Jane React',
    description: 'hoola',
  },
  {
    id: 2,
    name: 'Jan Reacta',
    description: 'hooli',
  },
  {
    id: 3,
    name: 'Shri Jaani Reactpuram Jii',
    description: 'hoolu',
  },
  {
    id: 4,
    name: 'Joutarou Ryuakutou sama',
    description: 'hora hora',
  },
];

let dishonored = [];

ReactDOM.render(
  <CardListState profiles={ profiles } dishonored={ dishonored }/>,
  document.getElementById('root')
);
