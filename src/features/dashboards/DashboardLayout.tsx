import { useEffect } from "react";
import order from "../../api/order";

const DashboardLayout = () => {

    useEffect(()=> {
        try{
            const fetchUser = async () => {
                const result = await order.fetchOrderById();
                //console.log(result);
                console.log(result);
            }

            fetchUser();
        }catch(error){
            console.log(error);
        }
        
    }, []);

    return (
        <>
            <div>Dashoard page</div>
        </>
    )
}

export default DashboardLayout;