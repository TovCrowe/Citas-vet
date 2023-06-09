import Paciente from "./Paciente"


function ListadoPacientees() {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen  overflow-y-scroll">
    <h2 className="font-black text-3xl text-center">Listado Pacientees</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {""}
      <span className="text-xl text-indigo-600 font-bold">pacientes y citas</span>
    </p>
    <Paciente />
    <Paciente />
    <Paciente />
    <Paciente />
    <Paciente />
    </div>
  )
}

export default ListadoPacientees