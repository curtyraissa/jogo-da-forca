export const Letras = ({disabled, letrasClick, handleClick}) => {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="letras-container">
      <div className="letra">
        {alfabeto.map(l => {
          const temLetra = letrasClick.includes(l);
          return <button key={l} onClick={() => handleClick(l)} disabled={disabled || temLetra}>
            {l.toUpperCase()}
          </button>
        })}
      </div>
    </div>
  )
}