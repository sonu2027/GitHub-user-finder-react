import "./App.css"
import Input from "./components/input/Input"
import Avatar from "./components/avatar/Avatar"
import { useState } from "react"

function App() {

  const [inputValue, setInputValue] = useState("")

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div id="parent-div">
      <h1>GitHub user finder</h1>
      <div id="search-box">
        <div id="search-item">
          <Input change={handleChange} />
        </div>
      </div>
      <div id="user-details">
        <Avatar username={inputValue} />
      </div>
    </div>
  )
}

export default App