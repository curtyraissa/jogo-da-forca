export const Jogo = ({ erro, mostrar, onClick, disabled, perdeu, ganhou }) => {
  const objJogo = ["../assets/forca0.png", "../assets/forca1.png", "../assets/forca2.png", "../assets/forca3.png", "../assets/forca4.png", "../assets/forca5.png", "../assets/forca6.png"]

  return (
    <div className="jogo-container">

      <div className="jogo-left">
        <img src={objJogo[erro]} alt="forca" />
      </div>

      <div className="jogo-right">
        <button onClick={onClick}>
          <p className="jogo-button">Escolher Palavra</p>
        </button>
        <h1 style={perdeu ? ganhou ? { color: "green" } : { color: "red" } : { color: "black" }}>
          {(!disabled || perdeu) ? (mostrar ? mostrar.join(" ") : "") : ""}
        </h1>
      </div>
    </div>
  )
}