import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import Principal from './Principal';
import './index.css';

{/*<App counter={new Counter()} />,*/}
ReactDOM.render(
  <Principal />,
  document.getElementById('root')
);
