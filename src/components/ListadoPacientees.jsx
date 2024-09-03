/* eslint-disable react/prop-types */

import Paciente from './Paciente';
import { useEffect } from 'react';

function ListadoPacientes({ pacientes, setPaciente, handleDeletePatient }) {
 



  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
          <h2 className="font-black text-3xl text-center">Listado Pacientees</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-xl text-indigo-600 font-bold">pacientes y citas</span>
          </p>

            {pacientes.map( (paciente) => {
              
              return (
                
                <Paciente
                  key={paciente.clienteId}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  handleDeletePatient={handleDeletePatient}
                  />
              )
            })}
        </>
    ) : (
      <>
          <h2 className="font-black text-3xl text-center">Listado Pacientees</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-xl text-indigo-600 font-bold">pacientes y citas</span>
          </p>
      </>
    )}

    </div>
  )
}

export default ListadoPacientes;
