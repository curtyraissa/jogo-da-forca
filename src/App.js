import { useState } from "react";
import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import palavras from "./palavras";

export default function App() {
  const [disabled, setDisabled] = useState(true)
  const [erro, setErro] = useState(0)
  const [palavra, setPalavra] = useState([])
  const [mostrar, setMostrar] = useState([])
  const [letrasClick, setLetrasClick] = useState([])
  const [perdeu, setPerdeu] = useState(false)
  const [ganhou, setGanhou] = useState(false)

  function escolherPalavra() {
    setErro(0);
    setDisabled(false);
    setPerdeu(false);
    setGanhou(false);
    const novaPalavra = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setPalavra(novaPalavra.split(""))
    setMostrar(Array(novaPalavra.length).fill('_'))
    setLetrasClick([])
  }

  function handleClick(l) {
    setLetrasClick([...letrasClick, l])
    const normalize = palavra.join("").normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("")

    if (normalize.includes(l.toLowerCase())) {
      let novoMostrar = [...mostrar];
      normalize.forEach((letra, pos) => {
        if (l === letra)
          novoMostrar[pos] = palavra[pos]
      })
      setMostrar(novoMostrar)
    } else {
      const novoErro = erro + 1
      setErro(novoErro)
    }
  }

  function venceu(venceu){
    setMostrar(palavra.join("").split(""))
    setPerdeu(true)
    setDisabled(true)
    venceu ? setGanhou(true) : setGanhou(false)
  }
  if (erro === 6 && !disabled){
    venceu(false)
  } else if(mostrar.join("") === palavra.join("") && !disabled) {
    venceu(true)
  }

  return (
    <main>
      <Jogo 
        erro={erro} 
        mostrar={mostrar} 
        onClick={() => escolherPalavra()} 
        disabled={disabled} 
        palavra={palavra} 
        perdeu={perdeu}
        ganhou={ganhou}
      />
      <Letras 
        disabled={disabled} 
        letrasClick={letrasClick} 
        handleClick={handleClick}
      />
    </main>
  );
}

