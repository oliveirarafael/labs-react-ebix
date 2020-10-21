import React, { useState, useEffect } from "react";

function Painel({ children, onClick }) {
  const [titulo, setTitulo] = useState("Titulo Generico");

  function Titulo() {
    return <h1>{titulo}</h1>;
  }

  function alterarTitulo(){
    setTitulo("Novo Titulo")
    onClick("Rafael")
  } 

  useEffect(() => {
    console.log("Contruindo o componente")
  }, [])

  useEffect(() => {
    console.log("Componentes Atualizado")
  }, [titulo])

  return (
    <>
      {console.log("Return()")}
      <Titulo />
      {children}
      <button onClick={alterarTitulo}>Alterar Titulo</button>
    </>
  );
}

export default Painel;
