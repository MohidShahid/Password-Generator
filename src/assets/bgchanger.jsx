import React from 'react'

export default function Bgchanger({changeColor}) {
  return (
    <>
    <div className="bg-changer flex align-center justify-center gap-3 bg-white p-2 rounded-full m-t">
    <button onClick={()=>{changeColor('red')}} className='bgChanger-btn bg-red-700 text-white'>Red</button>
    <button onClick={()=>{changeColor('green')}} className='bgChanger-btn bg-green-500 text-white' >Green</button>
    <button onClick={()=>{changeColor('violet')}} className='bgChanger-btn bg-violet-500 text-white' >Violet</button>
  </div>
  </>
  )
}
