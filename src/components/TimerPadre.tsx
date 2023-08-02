import React,{ useState } from 'react'
import { Timer } from '.'

export const TimerPadre = () => {
  const [miliSegundos, setMiliSegundos] = useState(0)
  return (
    <>
      <div>TimerPadre</div>
      <span>Milisegundos {miliSegundos}</span>
      <br />
      <button
        onClick={()=>setMiliSegundos(1000)}
        className="btn btn-primary">1000</button>
      <button
        onClick={()=>setMiliSegundos(2000)}
        className="btn btn-primary">2000</button>



      <Timer miliSegundos={miliSegundos}/>
    </>
  )
}
