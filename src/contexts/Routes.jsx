import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Checkout from "../pages/Checkout";
import Confirmation from "../pages/SuccessPage";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import Payment from "../components/Payment";
import ErrorPage from "../pages/ErrorPage";
import SuccessPage from "../pages/SuccessPage";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>,
                
            },
            {
                path:'checkout',
                element:<Checkout/>
            },
            {
                path:'/products/:productID',
                element:<ProductPage/>
            },
            {
                path:'success-page',
                element:<SuccessPage/>
            },
            
        ]
    },
    
])
export default Routes;