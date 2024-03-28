import { useState } from 'react'
import './App.css'
import './index.css'
import Bgchanger from './assets/bgchanger';
import PassGenerator from './components/PassGenerator';

function App() {
  const [counter , setCounter] = useState(0);
  const [color , setColor] = useState('olive');
  // console.log(counter)


  return (
    <div className={`flex flex-col items-center justify-evenly w-screen h-screen gap-4 bg-blue-200`} style={{backgroundColor : color}}>
      <div>
   <h1 className='text-3xl font-bold'>Practice App with freeCodeCamp</h1>
   <span className='m-4 font-bold'>Count Showing Here : {counter}</span>
   <div className="btn-container pt-3 flex gap-3 align-center justify-center ">
   <button onClick={()=>setCounter(counter+1)}>Add Value</button>
   <button onClick={()=> setCounter(counter-1)}>Remove Value</button>
   </div>
   </div>
   <PassGenerator />

  <Bgchanger changeColor = {setColor} />
   </div>

  )
}

export default App
