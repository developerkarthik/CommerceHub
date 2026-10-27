import { useEffect, useState } from "react";
import order from "../../api/order";
import { useAuth } from "../auth/context/AuthProvider";
import product from "../../api/product";
import { useNavigate } from "react-router";

const DashboardLayout = () => {
    const [productdata, setProductData] = useState([]);
    const { logout, logoutAll } = useAuth();

    const navigate = useNavigate();

    useEffect(()=> {
        try{
            // const fetchOrder = async () => {
            //     const result = await order.fetchOrderById();
            //     //console.log(result);
            //     console.log(result);
            // }

            const fetchProduct = async () => {
                const result = await product.fetchProducts();
                setProductData(result.data.products)
                console.log(result);
            }

            // const updateProduct = async () => {
            //     const result = await product.updateProductById();
            //     return result;    
            // }
            // const runTest = async () => {
            //     await Promise.all([
            //         fetchProduct(),
            //         fetchProduct(),
            //         //updateProduct(),
            //         fetchProduct(),
            //         fetchProduct()
            //     ]);
            // }
            
            // runTest().catch(console.error);
            fetchProduct()

        }catch(error){
            console.log(error);
        }
        
    }, []);

    const handleProductView = (id) => {
        navigate(`/product/${id}`); 
    }

    return (
        <>
            <div>Dashoard page</div>
            
            <button onClick={logout} className="border bg-blue-200 px-4 py-1 rounded-2xl border-blue-950 hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                Logout
            </button>

            <button onClick={logoutAll} className="border bg-blue-200 px-4 py-1 rounded-2xl border-blue-950 shadow-black hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                Logout All Devices
            </button>

            <div className="flex flex-wrap gap-5 p-5">
                {
                    productdata.length > 0 ? productdata.map((product) => (
                        <div className="border border-gray-400 rounded-2xl cursor-pointer w-[22%] p-2" key={product.id} onClick={() => handleProductView(product.id)}>
                            <h4>{product.name}</h4>
                            <div>{product.price}</div>
                            <div>{product.stock}</div>
                        </div> 
                    )) : (<p>No products found...</p>)
                }
                  
            </div>

            <div>
                Recently view:
                
            </div>
        </>
    )
}

export default DashboardLayout;