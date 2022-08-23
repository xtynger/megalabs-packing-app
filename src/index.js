import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { createRoot } from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route ,Switch } from 'react-router-dom'; //Esto es para implementar "Routing" en react, diferente a Angular
import MainSidebar from './common/MainSidebar';
import MainBar from './common/MainBar';
import MainHeader from './common/MainHeader';
import Orden from './components/Orden';
import LoginScreen from './components/LoginScreen';
import RegistrarUsuario from './components/RegistrarUsuario';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<App/>} />
      <Route path="/orden" element={<Orden />} />
      <Route path="/registro" element={<RegistrarUsuario/>} />

    </Routes>
  </BrowserRouter>,

);


reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
