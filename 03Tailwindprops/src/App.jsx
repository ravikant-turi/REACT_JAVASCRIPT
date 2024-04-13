import { useState } from 'react'
import Card from './Component/Card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const myarr=[100,200,300];
  return (
    <>
    <Card channel="ravikant"  name={myarr}></Card>
    <h1 className=''></h1>
    </>
  )
}

export default App
