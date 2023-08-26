import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import { TimerPadre, Usuario, ContReducer, Formulario, Formulario2, Todo } from "../components";
import { TodoHooks } from '../todoConHooks/TodoHooks';

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
              <NavLink to="/cont-Reducer" className="nav-link btn btn-info mx-2">
                Contador Reducer
              </NavLink>
              <NavLink to="/formulario" className="nav-link btn btn-info mx-2">
              Formulario
              </NavLink>
              <NavLink to="/formulario2" className="nav-link btn btn-info mx-2">
              Formulario 2
              </NavLink>
              <NavLink to="/Todo" className="nav-link btn btn-info mx-2">
              Todo
              </NavLink>
              <NavLink to="/TodoHooks" className="nav-link btn btn-info mx-2">
              TodoHooks
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
        <Route path='/cont-Reducer' element={<ContReducer />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/formulario2' element={<Formulario2 />}/>
        <Route path='/Todo' element={<Todo />}/>
        <Route path='/TodoHooks' element={<TodoHooks />}/>
      </Routes>
    </>
  )
}
