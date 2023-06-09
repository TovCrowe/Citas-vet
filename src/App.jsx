import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientees from "./components/ListadoPacientees"


function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPacientees />
    </div>
  )
}

export default App
