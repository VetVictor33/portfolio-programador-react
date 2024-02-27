import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.sass";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
