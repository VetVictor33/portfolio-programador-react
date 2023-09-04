import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import './App.sass';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import axios from './services/axios/axios';

function App() {
  const location = useLocation()

  async function wakeUpSMTPServer() {
    await axios.get('/');
  }

  useEffect(() => {
    wakeUpSMTPServer();
  }, [location])

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
