import './App.css';
import Form from './components/Form/Form';
import Citas from './components/Citas/Citas';
import { useState } from 'react';

function App() {

  const [citas, setCitas] = useState([])

  return (
    <div className="App">
      <h1 className="titulo">ADMINISTRADOR DE NEGOCIOS DE SILLONES</h1>
      <div className='cuerpo'>
        <Form citas={citas} setCitas={setCitas}/>
        <Citas citas={citas} setCitas={setCitas}/>
      </div>
    </div>
  );
}

export default App;
