import React, { useState } from 'react';
import Painel from './shared/Painel/Painel';

function Root() {
  const [nome, setNome] = useState("")
  
  function alterarNome(nome){
    setNome(nome)
  }
  
  return (
    <>
      {nome}
      <Painel onClick={alterarNome}>
        <p>Conteudo</p>
      </Painel>
    </>
  );
}

export default Root;