import './App.css'
// import rod from "./assets/img/rik.jpg";
import Randm_app from './components/Randm_app';
import Footer from './components/Footer';
import imagenes from './assets/imagenes';

function App() {
 

  return (
    <div className="App">
      <header className="imagenHeader">   
        {/* <img src={imagenes} className="imagenLogo" alt="imagen" /> */}
        <img src={imagenes[0].img} alt="" />
      </header>

      <Randm_app />        
 
      <Footer />
    
    </div>
  )
}

export default App



