import './App.css';
import React from 'react';
import LoginScreen from './components/LoginScreen';
import MainHeader from './common/MainHeader';
import MainSidebar from './common/MainSidebar';
import Orden from './components/Orden';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrarUsuario from './components/RegistrarUsuario';
import RouterView from './router/RouterView';
import Home from './components/Home';

function App() {
  return (
    <section id="body-pd">
      <MainHeader />
      <MainSidebar />
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </section>
  );
}


export default App;
