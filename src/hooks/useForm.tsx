import { ChangeEvent, useState } from 'react';

export const useForm = () => {
  const [formulario, setFormulario] = useState({
    //edad: '',
    //altura:''
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return {
    formulario,
    handleChange
  }
}
