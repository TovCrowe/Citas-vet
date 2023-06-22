import PropTypes from 'prop-types';

const Paciente = ({ paciente, setPaciente }) => {
  return (
    <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        sintomas: <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button className="bg-indigo-600 py-2 px-10 p-3 uppercase font-bold text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors" onClick={() => setPaciente(paciente)}>Editar</button>
        <button className="bg-red-600 py-2 px-10 p-3 uppercase font-bold text-white rounded-md hover:bg-red-700 cursor-pointer transition-colors">Eliminar</button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired
  }).isRequired,
  setPaciente: PropTypes.func.isRequired
};

export default Paciente;
