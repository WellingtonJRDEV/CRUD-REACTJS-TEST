import React, { useState } from 'react'
import Button from '../Button'
import './form.css'

const Form = () => {

  const [name, setName] = useState('')
  const [office, setOffice] = useState('')
  const [sold, setSold] = useState(0)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleOffice = (e) => {
    setOffice(e.target.value)
  }

  const handleSold = (e) => {
    setSold(e.target.value)
  }

  const reload = () => {
    window.location.reload()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      
    alert(`
      Seu nome é ${name}
      Sua profissão é ${office}
      Seu salário é ${sold}
    `)

    reload()
  }

  return (
    <div className='F-Container'>
      <div className='F-Heading'>
        <h2>Cadastro de funcionários</h2>
      </div>
      <form className='F-Form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nome' id='name' onChange={handleName}/>
        <input type='text' placeholder='Função' id='function' onChange={handleOffice} />
        <input type='text' placeholder='Digite o salário' id='salario' onChange={handleSold} />
        <Button 
          type="submit"
          name={'Adicionar'}
        />
      </form>
    </div>
  )
}

export default Form