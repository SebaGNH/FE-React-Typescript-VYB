import { useForm } from '../hooks/useForm';

interface FormDataI {
  edad: number;
  altura: number;
  apodo: string;
  color: string;
}

const initialState = {
  edad: 5,
  altura: 5,
  apodo: 'fufufa',
  color: 'anaranjada'
}

export const Formulario2 = () => {

  const { formulario, handleChange, color } = useForm<FormDataI>(initialState);

  return (
    <form autoComplete='off'>
      <h3>Formulario Con Hooks</h3>
      <div className="mb-3">
        <label className='form-label'>Edad: </label>
        <input
          onChange={handleChange}
          name='edad'
          type="text"
          className='form-control'
          value={formulario.edad}
        />


        <label className='form-label'>Altura: </label>
        <input
          onChange={handleChange}
          name='altura'
          type="text"
          className='form-control'
          value={formulario.altura}
          />

        <label className='form-label'>Color: </label>
        <input
          onChange={handleChange}
          name='color'
          type="text"
          className='form-control'
          value={color}
          />
      </div>
      { JSON.stringify(formulario)}
    </form>
  )
}

