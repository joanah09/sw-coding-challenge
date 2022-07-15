import { useState } from "react"

function ItemCount(item) {
    const [count, setCount] = useState(1)
    function decreasePrice() {
        setCount(prevState => prevState -1)
    }

    function incrementPrice() {
        setCount(prevState => prevState +1)
    }
    return (
        <>
        <div className="item-overview-count">
            <button onClick={decreasePrice} disabled={count <= 1}>
                <span className="material-symbols-outlined">remove</span>
            </button>
            <p>{count}</p>
            <button onClick={incrementPrice}>
                <span className="material-symbols-outlined">add</span>
            </button>
        </div>
        <div className="item-overview-details"> 
            <span className="item-overview-details-sale-price">
                {item.item.salePrice.slice(0, 1)}{item.item.salePrice.slice(1) * count}
            </span>
            <span className="item-overview-details-price"><strike>{item.item.originalPrice}</strike></span>
        </div>
        </>
    )   
}

export default ItemCount