import axios from "axios";
import React, { useEffect, useState } from "react";
import baseURL from "../../baseUrl";
import ProductSizeDetails from "./ProductSizeDetails";

const bearerToken = process.env.REACT_APP_BEARER
const config = {
    headers: { Authorization: `Bearer ${bearerToken}` }
}

function ProductSizeComponent() {
    const [user, setUser] = useState([]);
    const getData = () => {
        axios.get( `${baseURL}/products`, config)
        .then((res) => {
            const myData = res.data.d;
            setUser(myData);
        }).catch((err) => {
            console.log(err)
        });
    };
    useEffect(() => getData(), []);

    const size = user.slice(0, 1).map((item, id) => {
        return <ProductSizeDetails key={id} 
        {...item} />
    })
    
    return (
        <div className="size">
            {size}
        </div>
    )
}

export default ProductSizeComponent