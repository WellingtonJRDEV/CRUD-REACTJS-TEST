import React from 'react'
import Button from '../Button'
import './form.css'

const Form = () => {
  return (
    <div className='F-Container'>
      <div className='F-Heading'>
        <h2>Cadastro de funcionários</h2>
      </div>
      <form className='F-Form'>
        <input type='text' placeholder='Nome' id='name' />
        <input type='text' placeholder='Função' id='function' />
        <input type='number' placeholder='Digite o salário' id='salario' />
        <Button 
          name={'Adicionar'}
        />
      </form>
    </div>
  )
}

export default Form