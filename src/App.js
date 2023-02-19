import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import palavras from "./palavras";

export default function App() {
  const objJogo = [
    { src: "./assets/forca0.png", alt: "Forca" },
    /*{ src: "./assets/forca1.png", alt: "Forca" },
    { src: "./assets/forca2.png", alt: "Forca" },
    { src: "./assets/forca3.png", alt: "Forca" },
    { src: "./assets/forca4.png", alt: "Forca" },
    { src: "./assets/forca5.png", alt: "Forca" },
    { src: "./assets/forca6.png", alt: "Forca" }*/
  ]

  return (
    <main>
      {objJogo.map(i =>
        <Jogo key={i.alt} src={i.src} />
      )}

      <Letras />
      
    </main>
  );
}

