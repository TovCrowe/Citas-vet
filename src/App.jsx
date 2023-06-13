import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientees from "./components/ListadoPacientees"
import {useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
      <ListadoPacientees />
      </div>

    </div>
  )
}

export default App
