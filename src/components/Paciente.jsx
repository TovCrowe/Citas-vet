import { formattedDate } from "../Util/formattedDate";

/* eslint-disable react/prop-types */
const Paciente = ({ paciente, setPaciente, handleDeletePatient }) => {

  const { fecha_de_alta } = paciente;
   

  return (
    <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{formattedDate(fecha_de_alta)}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
          className="bg-indigo-600 py-2 px-10 p-3 uppercase font-bold text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors" 
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button 
          className="bg-red-600 py-2 px-10 p-3 uppercase font-bold text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors" 
          onClick={() => handleDeletePatient(paciente.clienteId)} 
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
