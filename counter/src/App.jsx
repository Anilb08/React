
import { useState } from 'react'
import './App.css'


function App() {

  const [color, setColor] = useState("green")


  return (
   <div className='w-full h-screen duration-200' style={{background:color}}>
      whole background 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className='bg-red-600 flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-sm px-3 py-2'>
           <button onClick={() => setColor("red")}>
            red
           </button>
           
        </div>
        <div className='bg-blue-600 flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-sm px-3 py-2'>
           <button onClick={() => setColor("blue")}>
            blue
           </button>
           
        </div>
        <div className='bg-black flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-sm px-3 py-2'>
           <button onClick={() => setColor("black")}>
            black
           </button>
           
        </div>
        <div className='bg-yellow-400 flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-sm px-3 py-2'>
           <button onClick={() => setColor("yellow")}>
            yellow
           </button>
           
        </div>
      </div>
    </div>
  )
}

export default App
