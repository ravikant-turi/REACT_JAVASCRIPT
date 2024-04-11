import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setcounter] = useState(34)


  function addValue() {
    console.log(counter);
    counter=counter+1;
    setcounter(counter);
  }
  function removeValue() {
    console.log(counter)
    counter=counter-1;
    setcounter(counter);
  }

  return (
    <>
    <h2>counterer value:{counter}</h2>

    <button onClick={addValue}>Add Value </button>

    <button onClick={removeValue}>Remove Value</button>
       
      
      
    </>
  )
}

export default App
