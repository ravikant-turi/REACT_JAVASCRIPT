import { useState } from 'react'


function App() {
 const [color,setColor]=useState("olive");



  return (
    <>
      <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
      
         <h2  className="text-xl text-align: center; ">backgound color changer</h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"  >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl">
        <button
        className="outline-none px-4"
        style={{backgroundColor:"red"}}
        onClick={()=>{
          setColor("red");
        }}
        >
          Red
        </button>
         <button
        className="outline-none px-4"
        style={{backgroundColor:"blue"}}
        onClick={()=>{
          setColor("blue");
        }}
        >blue</button>
         <button
        className="outline-none px-4"
        style={{backgroundColor:"black"}}
        
        onClick={()=>{
          setColor("black");
        }}>black</button>
         <button
        className="outline-none px-4"
        style={{backgroundColor:"pink"}}
        onClick={()=>{
          setColor("pink");
        }}
        >pink</button>
         <button
        className="outline-none px-4"
        style={{backgroundColor:"grey"}}
        onClick={()=>{
          setColor("grey");
        }}
        >grey</button>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
