import './App.css'
import Header from './componentes/Header/Header'
import Presentation from './componentes/Presentation/Presentation'
import SocialNavbar from './componentes/SocialNavbar/SocialNavbar'
import Projects from './componentes/Projects/Projects'
/*
import Footer from './componentes/Footer'*/

function App() {

  return (
    <div className="App">
      <Header />
      <Presentation />
      <SocialNavbar />
      <Projects />
      {/*
  <Footer />*/}
    </div>
  )
}

export default App
