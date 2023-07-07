import { useState } from 'react'

// src/App.tsx

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  // criando estado que contém o index da lista com valor inicial 0
const [index, setIndex] = useState(0);

function handleNextClick() {
  if (index + 1 < toolKit.length) {
    setIndex(index + 1);
  } else {
    setIndex(0); // voltar para o primeiro elemento
  }
}
function handlePreviousClick() {
  if (index -1 >= 0) {
    setIndex(index - 1);
  } else {
    setIndex(toolKit.length - 1); // essa parte retorna para o último elemento da lista caso não tenha um item anterior
  }
}

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{ toolKit[index] }</h2> 
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Próximo</button>
      <section>
        <h3>Adicione novas ferramentas</h3>
      </section>
    </>
  );
}




export default App;

