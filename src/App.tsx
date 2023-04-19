import { useState, useEffect } from 'react'
import './App.css'

const fib: (n: number, memo?: Record<string, any>) => number = (n, memo = {}) => {

  if (n in memo) {
    return memo[n];
  }

  if (n<=2) return 1;
  
  memo[n] = fib(n-1, memo) + fib(n-2, memo);

  return memo[n]
  }

function App() {
  const [count, setFib] = useState(0)
  const [odd, setOdd] = useState(false)
  useEffect(() => {
   count%2==0 ? setOdd(false) : setOdd(true)
  }, [count]);

  return (
    <div className="App">
      <h2>Get the fibonacci sequence</h2>
      <form>
        <input type="number" onChange={(e) => setFib(fib(parseInt(e.target.value)))}></input>
      </form>
      <h3>{count}</h3>
      <h4>{odd ? "odd" : "even"}</h4>
    </div>
  )
}

export default App
