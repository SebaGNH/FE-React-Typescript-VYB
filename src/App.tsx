import { TimerPadre, Usuario, ContReducer, Formulario, Formulario2 } from "./components";
import { AppRoutes } from "./routes/App.routes";
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="container pb-5">
        <AppRoutes/>
        {/* <Usuario /> */}
        {/* <hr /> */}
        {/* <TimerPadre /> */}
        {/* <hr /> */}
        {/* <ContReducer /> */}
        {/* <hr /> */}
        {/* <Formulario /> */}
        {/* <hr /><hr /><hr /> */}
        {/* <Formulario2 /> */}
      </div>
    </BrowserRouter>
  )
}

export default App