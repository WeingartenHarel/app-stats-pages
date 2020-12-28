import React from 'react';
import ReactDOM from 'react-dom';
import animation from './animation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<animation />, div);
  ReactDOM.unmountComponentAtNode(div);
});