import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/Context'
import { Home } from '../Home/Home'
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { MyOrder } from '../MyOrder/MyOrder'
import { SignIn } from '../SignIn/SignIn'
import { Navbar } from '../../Components/Navbar/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/CheckoutSideMenu'
import './App.css'



function AppRoutes() {
  let routes = useRoutes ([
    {path: "/", element: <Home />},
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/othes', element: <Home /> },
    {path: "/my-account", element: <MyAccount />},
    {path: "/my-order", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    {path: "/my-orders/last", element: <MyOrder />},
    {path: "/my-orders/:id", element: <MyOrder />},
    {path: "/sing-in", element: <SignIn />},
    {path: "/*", element: <NotFound />},
  ])
  return routes;
}

function App() {


  return (
      <ShoppingCartProvider>  
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
      </ShoppingCartProvider>
  )
}

export  {App}
