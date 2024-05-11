import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - configurar router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


// Importar páginas
import Schedule from './routes/Schedule/Schedule.jsx';
import Clients from './routes/Clients/Clients.jsx';
import ErrorPage from './routes/errorPage.jsx';
import { ContactDetails } from './routes/ContactDetails.jsx';
import { Services } from './routes/Services/Services.jsx';
import { Professionals } from './routes/Professionals/Professionals.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Schedule/>,
//   },
//   {
//     path: "/clients",
//     element: <Clients/>,
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3 - Pagina de erros
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Schedule/>,
      },{
        path: "/clientes",
        element: <Clients/>,
      },{
        path: "/profissionais",
        element: <Professionals/>,
      },{
        path: "/servicos",
        element: <Services/>,
      },
      //5 - nested routes - identificador unico
      {
        path: "/clientes/:id",
        // element: <ContactDetails/>,
      },
      // 7 - navigate para páginas não existentes
      {
        path: 'antigo-clientes',
        element: <Navigate to='/clientes'/>,
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
