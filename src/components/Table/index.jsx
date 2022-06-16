import React from 'react'
import Button from '../Button'
import './table.css'

const Table = () => {
  return (
    <div className='T-Container'>
      <table className='T-Table'>
        <thead className='T-Thead'>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Salário</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody className='T-Tbody'>
          <tr>
            <td>José Wellington</td>
            <td>Software Engineer</td>
            <td>8500.85</td>
            <td><Button name='Edit'/></td>
            <td><Button name='Delete'/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table