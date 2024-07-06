import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Checkout from "../pages/Checkout";
import Confirmation from "../pages/Confirmation";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import Payment from "../components/Payment";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>

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
                path:'confirmation-page',
                element:<Confirmation/>
            },
            {
                path:'payment',
                element:<Payment/>
            }
        ]
    },
    
])
export default Routes;