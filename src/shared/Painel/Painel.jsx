import React, { useState, useEffect } from "react";

function Painel(props) {
  const [titulo, setTitulo] = useState("Titulo Generico");

  console.log(props);
  
  function Titulo() {
    return <h1>{titulo}</h1>;
  }

  function alterarTitulo(){
    setTitulo("Novo Titulo")
    props.onClick("Rafael")
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
      {props.children}
      <button onClick={alterarTitulo}>Alterar Titulo</button>
    </>
  );
}

export default Painel;
