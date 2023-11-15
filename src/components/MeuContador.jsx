import ButtonName from "./ButtonName";
import { useState } from "react";
import styles from '../assets/button.module.css'

export default function MeuContador() {
  const [cont, setContador] = useState(0);

  function aumentar() {
    setContador(cont + 1);
  }

  function resert() {
    setContador(0);
  }

  function diminui() {
    setContador(cont - 1);
  }

  function logicaTexto(){
    return cont > 0 ? 
        "Maior que zero" : cont < 0 ?
        "Menor que zero" : <div> <ButtonName name='Zero'/> </div>
  }

  return (
    <div className="container">
      <h1>Meu contador</h1>
      <h3>{cont}</h3>
      <h4>
        {logicaTexto()}
      </h4>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={resert}>Reset</button>
      <button className={styles.myButton} onClick={diminui}>Diminui</button>

      {/* <ButtonName name='Aumentar' contador={cont}/> */}
    </div>
  );
}
