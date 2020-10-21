import { http } from "../ultis/http";


export const getClientes = () => http.get("/clientes").then(response => response.data)
export const salvarCliente = (nome) => http.post("/clientes", {nome})