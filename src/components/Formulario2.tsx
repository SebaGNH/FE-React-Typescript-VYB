import { useForm } from '../hooks/useForm';

export const Formulario2 = () => {

  const { formulario, handleChange } = useForm ();

  return (
    <form autoComplete='off'>
      <h3>Formulario Con Hooks</h3>
      <div className="mb-3">
        <label className='form-label'>Edad: </label>
        <input onChange={handleChange}
          type="text" className='form-control' name='edad' />


        <label className='form-label'>Altura: </label>
        <input onChange={handleChange}
        type="text" className='form-control' name='altura' />
      </div>
      { JSON.stringify(formulario)}
    </form>
  )
}

