import { useState } from 'react'
import './App.css'

// 2 - reaproveitamento da estrutura
import { Outlet } from 'react-router-dom'

// 4 - navegando entre paginas
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet></Outlet>
    </>
  )
}

export default App
