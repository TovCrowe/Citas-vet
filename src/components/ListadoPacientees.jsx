import React from 'react';
import PropTypes from 'prop-types';
import Paciente from './Paciente';

function ListadoPacientes({ pacientes, setPaciente }) {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{' '}
            <span className="text-xl text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                setPaciente={setPaciente}
                key={paciente.Id}
                paciente={paciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{' '}
            <span className="text-xl text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      propietario: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      sintomas: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPaciente: PropTypes.func.isRequired,
};

export default ListadoPacientes;