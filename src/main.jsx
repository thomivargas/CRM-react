import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCLiente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/Cliente'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Index/>,
          loader: clientesLoader,
          errorElement: <ErrorPage/>
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCLiente/>,
          action: nuevoClienteAction,
          errorElement: <ErrorPage/>
        },
        {
          path: '/clientes/:clienteId/editar',
          element: <EditarCliente />,
          loader: editarClienteLoader,
          errorElement: <ErrorPage/>,
          action: editarClienteAction
        },
        {
          path: '/clientes/:clienteId/eliminar',
          action: eliminarClienteAction
        }
      ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
