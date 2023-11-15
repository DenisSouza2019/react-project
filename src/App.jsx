import BuscarDados from "./components/BuscarDados";
import ButtonName from "./components/ButtonName";
import Lista from "./components/Lista";
import MeuContador from "./components/MeuContador";
import Paragrafo from "./components/Paragrafo";

function App() {
  return <div>
    <h1>Teste react</h1>

    <Paragrafo/>

    <ButtonName name='Clique'/>
    <ButtonName name='Clique1'/>

    <MeuContador/>

    <Lista/>

    <BuscarDados/>
  </div> 
}


export default App;
