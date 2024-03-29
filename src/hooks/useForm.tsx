import { ChangeEvent, useState } from 'react';

// T indica que es del tipo generico
// <T extends Object | T extends Array>
export const useForm = <T extends Object>(initialState: T) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return {
    formulario,
    handleChange,
    ...formulario
    //Regresa todo lo del formulario destructurado
    // { formulario, handleChange, color }
  }
}
