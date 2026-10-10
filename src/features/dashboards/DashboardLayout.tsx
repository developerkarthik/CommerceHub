import { useEffect } from "react";
import order from "../../api/order";
import { useAuth } from "../auth/context/AuthProvider";
import product from "../../api/product";

const DashboardLayout = () => {

    const { logout, logoutAll } = useAuth();

    useEffect(()=> {
        try{
            const fetchOrder = async () => {
                const result = await order.fetchOrderById();
                //console.log(result);
                console.log(result);
            }

            const fetchProduct = async () => {
                const result = await product.fetchProductById();
                //console.log(result);
                console.log(result);
            }

            //await Promise.all([
                fetchProduct();
                fetchOrder();
            //]);
            
        }catch(error){
            console.log(error);
        }
        
    }, []);

    return (
        <>
            <div>Dashoard page</div>
            
            <button onClick={logout} className="border bg-blue-200 px-4 py-1 rounded-2xl border-blue-950 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                Logout
            </button>

            <button onClick={logoutAll} className="border bg-blue-200 px-4 py-1 rounded-2xl border-blue-950 shadow-black hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                Logout All Devices
            </button>
        </>
    )
}

export default DashboardLayout;