import { useEffect, useState } from "react";
import { useParams } from "react-router";
import product from "../../api/product";

const ProductView = () => {

    const [data, setData] = useState({});
    const [views, setViews] = useState(0);

    const {id} = useParams();

    if(!id) return null;

    useEffect(() => {

        const fetchProduct = async () => {
            const result = await product.fetchProductById(id);
            setData(result.data);
        } 

        const fetchProductViews = async () => {
            const result = await product.fetchProductUserViews(id);
            console.log(result);
            setViews(result.count)
        }


        fetchProduct();
        fetchProductViews();
    }, [id]);

    return (
        <>
        <div>
            Details: <br/>
            Name: {data.name} <br/>
            Price: {data.price}
        </div>
        <div>
            <h6>User Viewed</h6>
            {views}
        </div>
        </>
    )
}

export default ProductView;