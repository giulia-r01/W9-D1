import { useState } from "react"
import "./App.css"
import ButtonComponent from "./ButtonComponent"
import ImageComponent from "./ImageComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>W9-D1</h1>
      <ImageComponent
        src="https://external-preview.redd.it/82b2SEhz_8N-ibLQvE8G751FO5lSdypgVHjhaAGnYTM.jpg?auto=webp&s=0bf6f6d4b1a4497aacc3596bc6451c45edbfd65d"
        alt="Panda rosso"
        width="400"
      />
      <ButtonComponent text="Checcarino" />
    </>
  )
}

export default App
