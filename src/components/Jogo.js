import "./Jogo.css"

export const Jogo = (props) => {
  return (
    <div className="jogo-container">
      <img src={props.src} alt="forca" />
    </div>
  )
}