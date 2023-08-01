import React, { useState } from 'react'

interface UserInterface{
  uid: string;
  name: string;
}

const usuarioTemporal : UserInterface = {
  uid: 'DEF456',
  name: 'Canelo'
}

export const Usuario = () => {
  const [usuario, setUsuario] = useState<UserInterface>()

  const login = (): void => {
    setUsuario({
      uid: 'ABC123',
      name: 'Fufufa'
    });
  }
  return (
    <div className="mt-5">
      <h3>UseState + Interface</h3>

      <button
        className='btn btn-primary'
        onClick={login}>
          Login
        </button>

      <pre>{JSON.stringify(usuario)}</pre>
      <pre>{JSON.stringify(usuarioTemporal)}</pre>
    </div>
  )
}
