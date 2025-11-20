import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'

const Layout = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product, qty) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id)
      
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: updatedCart[existingItemIndex].qty + qty
        }
        return updatedCart
      } else {
        // Add new item to cart
        return [...prevCart, {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: qty
        }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  return (
    <>
      <Navbar />
      <Outlet context={{ cart, addToCart, removeFromCart }} />
    </>
  )
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
