import { useState } from 'react'
import './App.css'

// 2 - reaproveitamento da estrutura
import { Outlet } from 'react-router-dom'

// 4 - navegando entre paginas
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <p>Footer</p>
    </>
  )
}

export default App;