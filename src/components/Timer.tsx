import React, { useEffect, useRef, useState } from 'react'
// type es xq solo se va a usar en este componente, en este caso lleva el =, es lo mismo que una interface
// es un tipo que solo vamos a trabajar en este archivo
// Lleva = como si fuera una clase
type TimerType = {
  miliSegundos: number;
  numeros?: number; //Al agregarle el ? significa que es opcional
}


//useRef crea una referencia que no importa cuantas veces se reconstruya el componente, siempre va a ser el mismo puntero en memoria
export const Timer = ({miliSegundos}: TimerType) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
  console.log({miliSegundos});

  useEffect(() => {
    //Limpiar el intervalo anterior antes de crear uno nuevo
    if (ref.current) {
      clearInterval(ref.current);
    }
    // ref.current && clearInterval(ref.current);
    // ref.current = setInterval( () => setSegundos( s => s +1), miliSegundos);

    // Limpiar el intervalo cuando el componente se desmonte o cuando miliSegundos cambie
    ref.current = setInterval(() => {
      setSegundos((s) => s + 1);
    }, miliSegundos);

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [miliSegundos]);



  return (
    <>
      <h3>Timer: <small>{segundos}</small></h3>
    </>
  )
}
