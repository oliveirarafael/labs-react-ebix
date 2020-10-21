import React, { useState } from 'react';
import Clientes from './components/Clientes';
import Painel from './shared/Painel/Painel';

function Root() {
  const [nome, setNome] = useState("")
  
  function alterarNome(nome){
    setNome(nome)
  }
  
  return (
    <>
      <Clientes />
    </>
  );
}

export default Root;