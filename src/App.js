import AddToDrug from "./AddToDrug.js"
import AddToWallet from "./AddToWallet.js"
import "./App.css"
import HistoryComponent from "./HistoryComponent"

function App() {
  return (
    <div>
      <header>
        <h1 class="mx-auto" style={{ width: "200px" }}>
          
          Welcome
        </h1>
      </header>
      <HistoryComponent />
    </div>
  )
}

export default App
