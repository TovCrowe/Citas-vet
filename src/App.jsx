import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientees from "./components/ListadoPacientees"
import { fetchPatients, createPatient, deletePatient } from "./Data/DataFetch"
import {useEffect, useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState([]) 
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const pacientesApi = await fetchPatients();
        setPacientes(pacientesApi);
        console.log(pacientesApi)
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    obtenerPacientes();
  }, []);

  const handleDeletePatient = async (id) => {
    try {
      await deletePatient(id);
      setPacientes(pacientes.filter(paciente => paciente.clienteId !== id));
      setPaciente({});
    } catch (error) {
      console.error("Error deleting patient:", error);
      
    }
  };

  const handleCreatePatient = async (patientData) => {
    try {
      const newPatient = await createPatient(patientData);
      console.log(patientData)
      setPacientes([...pacientes, newPatient]);
      setPaciente({});
    } catch (error) {
      console.error("Error creating patient:", error);
      
    }
  };

  const handleUpdatePatients = async () => {
    try {
      const pacientesApi = await fetchPatients();
      setPacientes(pacientesApi);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  return (
    <div className="container mx-auto mt-20"> 
      <Header /> 
      <div className="mt-12 md:flex"> 
      <Formulario 
     setPaciente={setPaciente}
     paciente={paciente}
     handleCreatePatient={handleCreatePatient}
     handleUpdatePatients={handleUpdatePatients}
        />
      <ListadoPacientees 
        pacientes={pacientes}
        setPaciente={setPaciente}
        handleDeletePatient={handleDeletePatient}
      />
      </div>

    </div>
  )
}

export default App
