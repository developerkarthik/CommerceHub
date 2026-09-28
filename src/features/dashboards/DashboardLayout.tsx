import { useEffect } from "react";
import order from "../../api/order";

const DashboardLayout = () => {

    useEffect(()=> {
        const fetchUser = async () => {
            const result = await order.fetchOrderById();
            console.log(result);
        }

        fetchUser();
    }, []);

    return (
        <>

        </>
    )
}

export default DashboardLayout;