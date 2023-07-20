import React, { useState } from 'react'

import {AiOutlineCopy} from 'react-icons/ai'

import './App.css'

export default function App() {

  const [pixels, setPixels] = useState('0');
  const [horizontal, setHorizontal] = useState('10');
  const [vertical, setVertical] = useState('10')
  const [spread, setSpread] = useState('0')
  const [blur, setBlur] = useState('0')
  const [newrgb, setNewrgb] = useState('#00000')
  const [mensagem, setMensagem] = useState('');



  const copyRadius = () =>{
    navigator.clipboard.writeText(`border-radius: ${pixels}px;`);

    setMensagem('Copiado com sucesso!')
    
    setInterval(() => {
      setMensagem(null)
    }, 2000);
  };

  const copyShadow = () =>{
    navigator.clipboard.writeText(`boxShadow: ${horizontal}px ${vertical}px ${blur}px ${spread}px}`);

    setMensagem('Copiado com sucesso!')
    
    setInterval(() => {
      setMensagem(null)
    }, 2000);
  };

  const copyColor = () =>{
    navigator.clipboard.writeText(`${newrgb}`);

    setMensagem('Copiado com sucesso!')
    
    setInterval(() => {
      setMensagem(null)
    }, 2000);
  };

  return (
    <div className='app'>
      
        <div className="preview" style={{borderRadius: `${pixels}px`, boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px`, backgroundColor: `${newrgb}`}}> </div>

        <div className="range-selector"> 

        <div className='BorderRadius'>
          <label htmlFor="radius"> Border Radius: </label>
          <input type="range" id="radius" min="0" max="100" value={pixels} onChange={(e) => setPixels(e.target.value)} />
        </div>

            <div className="horizontal-shadow">
              <label htmlFor="horizontal"> Horizontal Shadow: </label>
              <input type="range" id="horizontal" min={"-100"} max={"100"} onChange={(e) => setHorizontal(e.target.value)} />
            </div>

            <div className="vertical-shadow">
              <label htmlFor="vertifical"> Vertifical Shadow: </label>
              <input type="range" id="vertical" min={"-100"} max={"100"} onChange={(e) => setVertical(e.target.value)} />
            </div>

            <div className="blur-radius">
              <label htmlFor="blur"> Blur Radius: </label>
              <input type="range" id="blur" min={"0"} max={"300"} onChange={(e) => setBlur(e.target.value)}/>
            </div>

            <div className="spread-radius">
              <label htmlFor="spread"> Spread Radius: </label>
              <input type="range" id="spread" min={"-100"} max={"60"} onChange={(e) => setSpread(e.target.value)}/>
            </div>

            <div className="input-color">
              <label htmlFor="color"> Preview Color:  </label>
              <input type="color" id='color' onChange={(e) => setNewrgb(e.target.value)} />
            </div>

        </div>

        <div className="text-area"> <span>border-radius: {pixels}px;</span>  <AiOutlineCopy onClick={copyRadius} cursor={'pointer'} /></div>
        <div className="text-area"> <span>box-shadow: {horizontal}px {vertical}px {blur}px {spread}px;</span> <AiOutlineCopy onClick={copyShadow} cursor={'pointer'} /></div>
        <div className="text-area"> <span>{newrgb}</span> <AiOutlineCopy onClick={copyColor} cursor={'pointer'} /></div>

        {mensagem}

    </div>
  )
}
