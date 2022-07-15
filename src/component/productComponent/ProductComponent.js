import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from "./ProductItem";
import baseURL from "../../baseUrl";

const bearerToken = process.env.REACT_APP_BEARER
const config = {
  headers: { Authorization: `Bearer ${bearerToken}` }
};

function ProductComponent() {
   const [user, setUser] = useState([]);
   const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
      const getData = () => {
        axios.get( `${baseURL}/products`, config)
        .then((res) => {
          const myData = res.data.d;
          setUser(myData);
        }).catch((err) => {
          console.log(err);
        });
      }
      getData();

      function handleWidth() {
        setScreenSize(window.innerWidth)
      }

      window.addEventListener("resize", handleWidth)
    }, [])

    let data = user
    if (screenSize < 767) {
        data = data.slice(0, 1)
    } else if (screenSize < 991) {
      data = data.slice(0, 2)
    } else {
        data = data.slice(0, 4)
    }

    const products = data.map((item, id) => {
      return <ProductItem key={id}
      {...item}
      />
    })
    return (
        <section className="product">
            <div className="product_title">
                <h2>Recommended for you</h2>
                <Link to="/products">See more</Link>
            </div>
            <div className="product_list">
                {products}
            </div> 
        </section>
    )
}

export default ProductComponent