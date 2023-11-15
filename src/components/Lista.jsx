import { useEffect, useState } from "react";

const minhaLista = [
  { id: 1, value: "teste 1" },
  { id: 2, value: "teste 2" },
  { id: 3, value: "teste 3" },
  { id: 4, value: "teste 4" },
  { id: 5, value: "teste 5" },
  { id: 6, value: "teste 6" },
  { id: 7, value: "teste 7" },
];

export default function Lista() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  return (
    <div>
      <h1>Listas</h1>

      <input
        value={pesquisa}
        onChange={(e) => {
          setPesquisa(e.target.value);
        }}
        placeholder="Pesquise"
      />

      {produtos.map((item, index) => {
        return (
          <div>
            <li key={item.id}>{item.value}</li>
          </div>
        );
      })}
    </div>
  );
}
