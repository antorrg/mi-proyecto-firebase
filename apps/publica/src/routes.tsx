import { createBrowserRouter } from 'react-router'
import Layout from './shared/components/Layout'
import Home from './views/Home'
import Products from './features/product/Products'
import DetailProduct from './features/product/DetailProduct'
import Item from './features/product/Item'
import Videos from './features/videos/Videos'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import { RouteErrorBoundary } from './shared/errors/RouteErrorBoundary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'detalles',
        element: <Products />
      },
      {
        path: 'detalles/:id',
        element: <DetailProduct />
      },
      {
        path: 'detalles/item/:id',
        element: <Item />
      },
      {
        path: 'videos/:id',
        element: <Videos />
      },
      {
        path: 'acerca',
        element: <About />
      },
      {
        path: 'contacto',
        element: <Contact />
      }
    ]
  }
])
