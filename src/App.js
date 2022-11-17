import AddToDrug from "./AddToDrug"
import "./App.css"
import HistoryComponent from "./HistoryComponent"

function App() {
  return (
    <div>
      <header>
        <h1 class="mx-auto" style={{ width: "200px" }}>
          {" "}
          Welcome
        </h1>
      </header>
      <AddToDrug />
    </div>
  )
}

export default App
