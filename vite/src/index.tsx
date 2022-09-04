import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootEle = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootEle).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
