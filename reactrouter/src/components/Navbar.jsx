import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Agenda</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/profissionais">Profissionais</Link>
        <Link to="/servicos">Serviços</Link>
    </nav>
  )
}
