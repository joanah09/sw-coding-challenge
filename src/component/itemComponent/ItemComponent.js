import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemDetails from './ItemDetails'
import baseURL from "../../baseUrl";

const bearerToken = process.env.REACT_APP_BEARER
const config = {
    headers: {Authorization: `Bearer ${bearerToken}`}
}

function ItemComponent() {
    const [user, setUser] = useState([]);
    const getData = () => {
        axios.get(`${baseURL}/products`, config)
        .then((res) => {
            const myData = res.data.d;
            setUser(myData);
        }).catch((err) => {
            console.log(err)
        });
    };
    useEffect(() => getData(), []);

    const products = user.slice(0, 1).map((item, id) => {
        return <ItemDetails key={id}
        {...item} />
    })
    return (
        <div className="item">
            {products}
        </div>
    )   
}

export default ItemComponent