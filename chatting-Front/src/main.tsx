// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 경로
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // createRoot 사용
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
