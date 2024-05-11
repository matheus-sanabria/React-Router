import React from 'react'
import { Link } from 'react-router-dom'
import StyledNavbar from './style'

export const Navbar = () => {
  function toggleOffcanvasClass() {
    const offcanvasElement = document.getElementById("offcanvasWithBothOptions"); // Substitua com o ID do seu elemento offcanvas
  
    if (window.innerWidth >= 992) { // Defina a largura apropriada para dispositivos desktop
      offcanvasElement.classList.remove("offcanvas");
    } else {
      offcanvasElement.classList.add("offcanvas");
    }

    const btnNavbar = document.getElementById("BtnNavbar"); // Substitua com o ID do seu elemento offcanvas
  
    if (window.innerWidth >= 992) { // Defina a largura apropriada para dispositivos desktop
      btnNavbar.style.display = "none";
    } else {
      btnNavbar.style.display = "block";
    }

    const navBar = document.getElementById("Navbar"); // Substitua com o ID do seu elemento offcanvas
  
    if (window.innerWidth >= 992) { // Defina a largura apropriada para dispositivos desktop
      navBar.style.top = "0";
      navBar.style.height = "100vh";
    } else {
      navBar.style.top = "50px";
      navBar.style.height = "calc(100vh - 50px)";
    }


  }
  
  // Adicione um ouvinte de evento para verificar o redimensionamento da janela
  window.addEventListener("resize", toggleOffcanvasClass);
  
  // Chame a função ao carregar a página para configurar inicialmente o estado da classe
  window.addEventListener("load", toggleOffcanvasClass);
  
  return (
    <>
    <StyledNavbar>
      <nav className="Navbar" id='Navbar'>
            <button class="btn" id='BtnNavbar' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <i class="fa-solid fa-bars" style={{color: "#ffffff",}}></i>
            </button>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h1>Studio Marlene</h1>
                </div>
                <div class="offcanvas-body">
                  <ul className='Navbar__list'>
                      <Link to="/"><i class="fa-regular fa-calendar"></i>Agenda</Link>
                      <Link to="/clientes"><i class="fa-regular fa-user"></i>Clientes</Link>
                      <Link to="/profissionais"><i class="fa-regular fa-user"></i>Profissionais</Link>
                      <Link to="/servicos"><i class="fa-solid fa-scissors"></i>Serviços</Link>
                  </ul>
                </div>
            </div>
            {/* <ul className='Navbar__list'>
                <Link to="/"><i class="fa-regular fa-calendar"></i>Agenda</Link>
                <Link to="/clientes"><i class="fa-regular fa-user"></i>Clientes</Link>
                <Link to="/profissionais"><i class="fa-regular fa-user"></i>Profissionais</Link>
                <Link to="/servicos"><i class="fa-solid fa-scissors"></i>Serviços</Link>
            </ul> */}
        </nav>
          {/* <Link to="/"><i class="fa-regular fa-calendar"></i>Agenda</Link>
          <Link to="/clientes"><i class="fa-regular fa-user" style={{color: "#ffffff;",}}></i>Clientes</Link>
          <Link to="/profissionais"><i class="fa-regular fa-user" style={{color: "#ffffff;",}}></i>Profissionais</Link>
          <Link to="/servicos"><i class="fa-solid fa-scissors" style={{color: "#ffffff;",}}></i>Serviços</Link> */}
     
    </StyledNavbar>
    </>
  )
}
