
import './App.css'
import useCount from './useCount'

function App() {
 const [count,handleIncrement,handleDecrement]=useCount()

  return (
    <>
    <p>{count}</p>
     <button onClick={handleIncrement}>Increment</button>
  
     <button onClick={handleDecrement} >Decrement</button>
    </>
  )
}

export default App
