import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
