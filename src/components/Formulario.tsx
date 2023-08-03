import React, { ChangeEvent, useState } from 'react'

export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: '',
    nombre:''
  });

  //const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    //console.log(ev.target.name);
    //console.log(ev.target.value);

    // destructuramos el target
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value // cada valor apunta a su name "email / nombre"
    })
  }

  return (
    <form autoComplete='off'>
      <div className="mb-3">
        <label className='form-label'>Email: </label>
        <input onChange={handleChange}
          type="email" className='form-control' name='email' />


        <label className='form-label'>Nombre: </label>
        <input onChange={handleChange}
        type="text" className='form-control' name='nombre' />
      </div>
      { JSON.stringify(formulario)}
    </form>
  )
}


// es HTMLInputElement xq está trabajando un input de html