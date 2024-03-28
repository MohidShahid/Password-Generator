import React, { useEffect , useRef , useCallback} from "react";
import { useState } from "react";
import ToggleSwitch from "./toggleSwitch";

function PassGenerator() {
  const [length, Setlength] = useState(8);
  const [Number, SetNumber] = useState(false);
  const [Character, SetCharacter] = useState(false);
  const [InputVal , SetInputVal] = useState('');
  const PassRef = useRef(null);

  const GeneratePassword = useCallback(()=>{
    let PassChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Password = '';
    if(Number) PassChar += '0123456789';
    if(Character) PassChar += '%$@!#_-';
    for(let i = 1; i<=length; i++){
      const randomNum = Math.floor(Math.random()*PassChar.length + 1);
    Password += PassChar.charAt(randomNum);
    }
    SetInputVal(Password)
  }, [length , Number , Character])

  const handleCopy =()=>{
  window.navigator.clipboard.writeText(InputVal);
   PassRef.current?.select();
  }

  useEffect(()=>{
     GeneratePassword()
  },[length, Number, Character])
  return (
    <div className="flex flex-col items-center justify-evenly w-96 h-96 bg-blue-950 text-white rounded-lg main-box">
      <div className="wrapper">
        <input type="text" placeholder="0" className="px-6 py-2 passGen" value={InputVal} readOnly
         ref={PassRef} />
        <button className="c-btn" onClick={handleCopy}>Copy</button>
      </div>

      <div className="specialPass flex flex-col items-center justify-evenly w-full h-52">
        <div className="range flex flex-col items-start w-full pl-6 text-xs">
          <label htmlFor="Length">Length :{length}</label>
          <input
            className="range-box"
            type="range"
            value={length}
            step={2}
            min={0}
            max={20}
            onChange={(e) => {
              Setlength(e.target.value);
            }}
          />
        </div>
        <ToggleSwitch PassType={"Number"}  toggleOption = {SetNumber}/>
        <ToggleSwitch PassType={"Character"} toggleOption = {SetCharacter}/>
      </div>
    </div>
  );
}

export default PassGenerator;
