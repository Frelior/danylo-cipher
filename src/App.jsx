import Input from "./components/Input/Input"
import Output from "./components/Output/Output"
import Switch from "./components/Switch/Switch"
import { useState } from "react"
import { textToChifer, chiferToText } from "./components/Output/chifer"

export default function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [translateMode, setTranslateMode] = useState(true)

  function handleInputChange(event) {
    setInput(event.target.value)
    setOutput(
      translateMode
        ? textToChifer(event.target.value)
        : chiferToText(event.target.value)
    )
  }
  function handleTranslateMode() {
    setTranslateMode((prev) => !prev)
    console.log(translateMode)
  }

  return (
    <>
      <header>
        <h1>52 51 62 51 32 72 92 23 53 41</h1>
        <div>
          <p>А &gt;&gt;&gt; 42</p>
          <Switch onClick={handleTranslateMode}></Switch>
          <p>42 &gt;&gt;&gt; А</p>
        </div>
      </header>

      <main>
        <h3>Input</h3>
        <div className="wrapper">
          <Input
            value={input}
            onChange={handleInputChange}
          ></Input>
        </div>

        <h3>Output</h3>
        <span>click to copy</span>
        <div className="wrapper">
          <Output text={output || "-----"}></Output>
        </div>
      </main>
    </>
  )
}
