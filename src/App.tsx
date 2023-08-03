import { TimerPadre, Usuario, ContReducer, Formulario, Formulario2 } from "./components";

const App = () => {
  return (
    <div className="container pb-5">
      <Usuario />
      <hr />
      {/* <TimerPadre /> */}
      <hr />
      <ContReducer />
      <hr />
      <Formulario />
      <hr /><hr /><hr />
      <Formulario2 />
    </div>
  )
}

export default App