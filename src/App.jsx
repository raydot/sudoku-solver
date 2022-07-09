import { Digit } from './components/Digit'

import './App.css'

const initialBoard = [...Array(9)].map(e => Array(9))

console.log(initialBoard)

const [board, setBoard] = useState([])

function App() {
  return (
    <div className="App">
      <section>
        <h2>Sit -n- Solve!</h2>
        <Digit />
        <Digit />
        <Digit />
        <Digit />
        <Digit />
        <Digit />
      </section>
    </div>
  )
}

export default App
