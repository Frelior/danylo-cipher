import "./App.css"
import Input from "./components/Input/Input"
import Output from "./components/Output/Output"
import { useState } from "react"
import { textToChifer } from "./components/Output/chifer"

export default function App() {
  const [input, setinput] = useState("")
  const [output, setoutput] = useState("")

  function handleInputChange(event) {
    setinput(event.target.value)
    const outputChifer = textToChifer(event.target.value)
    console.log(outputChifer)
  }

  return (
    <>
      <header>
        <h1>81 52 12 62!!!</h1>
        <div>Переключатель</div>
      </header>

      <main>
        <div className="wrapper">
          <Input
            value={input}
            onChange={handleInputChange}
          ></Input>
          {/* <Button onClick={handleClick}>BUTIB</Button> */}
        </div>

        <div className="wrapper">
          <Output text={output}></Output>
        </div>
      </main>
    </>
  )
}
