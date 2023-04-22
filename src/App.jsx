import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    localStorage.clear();
  }, [])

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
