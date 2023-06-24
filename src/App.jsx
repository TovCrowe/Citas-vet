import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientees from "./components/ListadoPacientees"
import {useEffect, useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))??[]) //estado inicial
  const [paciente, setPaciente] = useState({})


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.Id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20"> 
      <Header /> 
      <div className="mt-12 md:flex"> 
      <Formulario 
        pacientes={pacientes} 
        setPacientes={setPacientes}
        paciente={paciente}
        />
      <ListadoPacientees 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>

    </div>
  )
}

export default App
