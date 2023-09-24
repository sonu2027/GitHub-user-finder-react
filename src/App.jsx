import "./App.css"
import Input from "./components/input/Input"
import Avatar from "./components/avatar/Avatar"
import { useState } from "react"
import { BsSearch } from "react-icons/bs"
function App() {

  const [inputValue, setInputValue] = useState("")
  const [startSearching, setSearching] = useState(false)
  function handleChange(e) {
    setInputValue(e.target.value)
    setSearching(false)
  }

  function handleSearch() {
    setSearching(true)
  }

  return (
    <div id="parent-div">
      <h1>GitHub user finder</h1>
      <div id="search-box">
        <div id="search-item">
          <Input change={handleChange} />
          <BsSearch id="search-icon" onClick={handleSearch} />
        </div>
      </div>
      <div id="user-details">
        {startSearching == true ? <Avatar username={inputValue} /> : ""}
      </div>
    </div>
  )
}

export default App