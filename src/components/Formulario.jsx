import {useState, useEffect} from "react"


function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-4">
          <label htmlFor="mascota" className="block font-bold text-gray-600 uppercase">Nombre Mascota </label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="propietario" className="block font-bold text-gray-600 uppercase">Nombre Mascota </label>
          <input id="propietario" type="text" placeholder="Nombre del propitario" className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-bold text-gray-600 uppercase"> Email </label>
          <input id="email" type="text" placeholder="Nombre del propitario" className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="alta" className="block font-bold text-gray-600 uppercase"> Alta </label>
          <input id="alta" type="date" placeholder="Nombre del propitario" className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg" />
        </div>

        <div className="mb-4">
          <label htmlFor="sintomas" className="block font-bold text-gray-600 uppercase"> Alta </label>
          <textarea id="sintomas" className="border-2 mt-2 w-full p-2 placeholder-gray-600 rounded-lg" placeholder="Describe los sintomas">

          </textarea>
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

export default Formulario;
