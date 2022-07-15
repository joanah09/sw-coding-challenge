import ProductItem from "../component/productComponent/ProductItem";
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from "../baseUrl";

const bearerToken = process.env.REACT_APP_BEARER
const config = {
  headers: { Authorization: `Bearer ${bearerToken}` }
};

function Products() {
    const [user, setUser] = useState([]);
    const getData = () => {
      axios.get(`${baseURL}/products` , config)
      .then((res) => {
        //console.log(res.data.d);
        const myData = res.data.d;
        setUser(myData);
      }).catch((err) => {
        console.log(err);
      });
    };
    useEffect(() => getData(), []);
  
    const products = user.map((item, id) => {
      return <ProductItem key={id}
      {...item}
      // title={item.name}
      // imageUrl={item.imageUrl}
      // description={item.description}
      // originalPrice={item.originalPrice}
      />
    })
    return (
        <section className="product">
            <div className="product_title">
                <h2>Products</h2>
            </div>
            <div className="product_list">
                {products}
            </div> 
        </section>
    )
}

export default Products