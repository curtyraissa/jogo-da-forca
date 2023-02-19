export const Jogo = (props) => {
  return (
    <div className="jogo-container">

      <div className="jogo-left">
        <img src={props.src} alt="forca" />
      </div>

      <div className="jogo-right">
        <button><p className="jogo-button">Escolher Palavra</p></button>
        <h1>quarentena</h1>
      </div>
    </div>
  )
}