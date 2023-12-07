import Contador from "./components/Contador";
import Informacion from "./components/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui vamos agregar la logica del componente

  return (
    //aqui va un poquito de logica
    // luego va el maquetado del componente
    <section className="container my-4">
      <h1 className="text-center display-3">PrimerApp React</h1>
      <Informacion tituloSecundario='Este titulo fue creado con un props' ></Informacion>
      <Contador></Contador>
      {/* <Informacion /> */}
    </section>
  );
}

export default App;
