import React from 'react';
import ReactDOM from 'react-dom';
import ActionPreivew from './ActionPreivew';


it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionPreivew />, div);
  ReactDOM.unmountComponentAtNode(div);
});