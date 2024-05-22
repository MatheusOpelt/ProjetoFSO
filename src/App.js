import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/clientes')
    .then(response => setClientes(response.data))
  }, {});

  const addClient = () => {
    axios.post('http://localhost:8081/api/v1/clientes', {
      nome: 'Matheus'
    })
    .then(response => setClientes([...clientes].concat(response.data)))
  }

  return (
    <div className="">
      <button onClick={() => addClient()}>Add</button>
      <table class="table" id="tabclientes">
            <thead>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Data Nascimento</th>
                <th></th>
            </thead>
            <tbody>
              {
                clientes.map(cliente => {
                  return (
                  <tr>
                    <td>{cliente.nome}</td>
                    <td>{cliente.endereco}</td>
                    <td>{cliente.dataDeNascimento}</td>
                  </tr>
                  )
                })
              }
            </tbody>
        </table>
    </div>
  );
}

export default App;
