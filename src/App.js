import Banner from './componentes/Banner/index';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)}/>
    </div>
  );
}

export default App;
