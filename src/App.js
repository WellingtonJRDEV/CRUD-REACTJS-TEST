import './app.css'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  return (
    <div className="container">
      <h1>CRUD</h1>
      <Form />
      <Table />
    </div>
  )
}

export default App
