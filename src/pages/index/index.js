import React from 'react'
import ReactDOM from 'react-dom';
import View from './view'
import '@/global.scss'

const ICE_CONTAINER =  document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(<View />, ICE_CONTAINER);