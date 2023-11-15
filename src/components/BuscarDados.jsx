import { useEffect,useState } from "react";

const tarefas = [
  { id: "1", title: "teste 1" },
  { id: "2", title: "teste 2" },
  { id: "3", title: "teste 3" },
];

export default function BuscarDados() {
  const [tarefasItem, setTarefas] = useState(tarefas);

  useEffect(() => {
    //console.log("entrou");
    async function buscarDados() {
      const endpoint = "https://jsonplaceholder.typicode.com/todos";

      //   fetch(endpoint)
      //     .then((response) => response.json())
      //     .then((json) => console.log(json));

      const result = await fetch(endpoint);
      const resultadoFinal = await result.json();

      return resultadoFinal;
    }

    buscarDados().then((res) => {
      console.log(res);
      setTarefas(res)
    });
  }, []);

  return (
    <div>
      <h1>Buscando dados API/Fake</h1>
      <ol>
        {tarefasItem.map((item,index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ol>
    </div>
  );
}
