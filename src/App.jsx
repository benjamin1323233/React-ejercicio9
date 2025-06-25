import Formulario from "./componentes/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from "./componentes/Titulo";
const App = () => {
  return (
    <div>
      <Titulo ></Titulo>
      <Formulario clasName="d-flex justify-content-center"></Formulario>
    </div>
  );
};

export default App;