import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
// import { Usuario } from '../components';
import { TimerPadre, Usuario, ContReducer, Formulario, Formulario2 } from "../components";

export const AppRoutes = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">

              <NavLink  to="/" end  className="nav-link btn btn-info mx-2">
                Home
              </NavLink>

              <NavLink to="/usuario" className="nav-link btn btn-info mx-2">
                Usuario
              </NavLink>
              <NavLink to="/timer-padre" className="nav-link btn btn-info mx-2">
                TimerPadre
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Usuario />}/>
        <Route path='/usuario' element={<Usuario />}/>
        <Route path='/usuario' element={<Usuario />}/>
        <Route path='/timer-padre' element={<TimerPadre />}/>
      </Routes>
    </>
  )
}
