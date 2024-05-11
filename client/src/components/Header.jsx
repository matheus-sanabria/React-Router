import React from 'react'
import { useLocation } from 'react-router-dom'

export const Header = () => {

    const location = useLocation();

    let title = 'Título Padrão'; // Título padrão
  
    if (location.pathname === '/') {
      title = 'Agenda';
    } else if (location.pathname === '/clientes') {
      title = 'Clientes';
    }
    else if (location.pathname === '/profissionais') {
        title = 'Profissionais';
    }
    else if (location.pathname === '/servicos') {
        title = 'Serviços';
    }
    // Outras rotas
  
    return (
      <header>
        <h2 style={{fontSize:"1.3em"}}>{title}</h2>
      </header>
    );
}
