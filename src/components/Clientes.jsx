import React, { useState, useEffect } from "react";
import { deletarCliente, getClientes, salvarCliente } from "./Clientes.service";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");

  async function carregaClientes() {
    let _clientes = [];
    await getClientes()
      .then((res) => (_clientes = res))
      .catch(console.log);
    setClientes(_clientes);
  }

  function salvar(){
      salvarCliente(nome);
      carregaClientes();
  }

  function deletar(id){
    deletarCliente(id);
    carregaClientes();
  }

  useEffect(() => {
    carregaClientes();
  }, []);

  return (
    <div>
      <input type="text" onChange={(event) => setNome(event.target.value)}/>  
      <p>{nome}</p>
      <button onClick={salvar}>Salvar</button>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nome}
            <button onClick={() => deletar(cliente.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;
