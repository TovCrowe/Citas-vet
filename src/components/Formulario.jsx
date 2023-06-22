import { PropTypes } from 'prop-types';
import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes }) {
  
  const [nombre, setNombre] = useState(""); //estado inicial
  const [propietario, setPropietario] = useState(""); //estado inicial
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false); 

  const gnrtId = () => {
    const random = Math.random().toString(36).substr(2); //genera un numero aleatorio
    const fecha = Date.now().toString(36); //genera un numero aleatorio

    return random + fecha;
  }; //genera un id aleatorio

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("campovacio");
      setError(true);
      return;
    } else {
      setError(false);
      //objeto de paciente
      const objPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        Id: gnrtId(),
      };
      //console.log(objPaciente)
      setPacientes([...pacientes, objPaciente]); //agrega el objeto al arreglo


      setNombre("");
      setEmail("");
      setFecha("");
      setSintomas("");
      setPropietario("");

    }
  }; //envia los datos al arreglo

  return (
    <div className="md:w-1/2 mb-5 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      {error && <Error>{<p>Todos los campos son necesarios</p>}</Error>} {/*muestra el error */}
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block font-bold text-gray-600 uppercase"
          >
            Nombre Mascota: {nombre}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block font-bold text-gray-600 uppercase"
          >
            Nombre propietario{" "}
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propitario"
            className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-bold text-gray-600 uppercase"
          >
            {" "}
            Email:{" "}
          </label>
          <input
            id="email"
            type="text"
            placeholder="Nombre del propitario"
            className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="alta"
            className="block font-bold text-gray-600 uppercase"
          >
            {" "}
            Alta{" "}
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Nombre del propitario"
            className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sintomas"
            className="block font-bold text-gray-600 uppercase"
          >
            {" "}
            Alta{" "}
          </label>
          <textarea
            id="sintomas"
            className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-600 p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all"
          value="agregar paciente"
        />
      </form>
    </div> 
  );
}

Formulario.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
  
};

export default Formulario;
