import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import axios from './services/axios/axios';
import { useEffect, useState } from 'react';


function App() {
  async function wakeUpSMTPServer() {
    await axios.get('/');
  }
  useEffect(() => {
    wakeUpSMTPServer();
  })

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
