import './App.css';
import CrudApi from './Componentes/CrudApi';
import banner from './banner.png';


function App() {
  return (
    <>
    <div id="container">
    <header id="encabezado">
      
      <img src={banner} class="banner"/>
    </header>
    <CrudApi/>
    </div>
    </>
  );
}

export default App;
