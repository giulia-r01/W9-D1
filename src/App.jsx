import { useState } from "react"
import "./App.css"
import ButtonComponent from "./ButtonComponent"
import ImageComponent from "./ImageComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>W9-D1</h1>
      </header>
      <main>
        <h2>Proviamo a fare l'esercizio</h2>
        <ImageComponent
          src="https://external-preview.redd.it/82b2SEhz_8N-ibLQvE8G751FO5lSdypgVHjhaAGnYTM.jpg?auto=webp&s=0bf6f6d4b1a4497aacc3596bc6451c45edbfd65d"
          alt="Panda rosso"
          width={400}
        />
        <p>
          Il panda rosso (Ailurus fulgens) è un mammifero erbivoro di dimensioni
          relativamente piccole, simile a un grosso gatto. È un animale timido e
          schivo, che vive nelle foreste dell'Asia.
        </p>
        <ButtonComponent text="Scopri di più" />
        <ImageComponent
          src="https://t3.ftcdn.net/jpg/01/73/37/16/360_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg"
          alt="Orsetto lavatore"
          width={400}
        />
        <p>
          L'orsetto lavatore vive in Nord America. È chiamato dagli Americani
          “raccoon”. Il nome deriva dalla parola indiana “arakum”, che significa
          “lui graffia con le zampe”. L'orsetto lavatore è poco più grande di un
          gatto. Le dita sono lunghe con robusti artigli.
        </p>
        <ButtonComponent text="Scopri di più" />
      </main>
    </>
  )
}

export default App
