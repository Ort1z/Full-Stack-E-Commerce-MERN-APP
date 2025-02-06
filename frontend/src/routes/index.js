import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'

/**
 * Defines the routes for the application using createBrowserRouter.
 * 
 * Routes:
 * - "/" (root): Renders the App component.
 *   - "": Renders the Home component.
 *   - "login": Renders the Login component.
 *   - "forgot-password": Renders the ForgotPassword component.
 *   - "sign-up": Renders the SignUp component.
 *   - "product-category": Renders the CategoryProduct component.
 *   - "product/:id": Renders the ProductDetails component.
 *   - "cart": Renders the Cart component.
 *   - "search": Renders the SearchProduct component.
 *   - "admin-panel": Renders the AdminPanel component.
 *     - "all-users": Renders the AllUsers component.
 *     - "all-products": Renders the AllProducts component.
 */
const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])


export default router