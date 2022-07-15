import ProductSizeButton from "./productSizeButton"

function ProductSizeDetails(item) {
    const itemBtn = item.sizes.map((item, id) => { return (
    <ProductSizeButton key={id} {...item} />
    )
        
    })
    return (
        <div className="size_details">
            <div className="size_details-image">
                <img src={`${item.imageUrl}`} alt={item.name} />
                <h3>{item.name}</h3>
            </div>
            <div className="size-info">
                <p>{item.description}</p>
                <div className="size-price">
                    <span className="size-price-sale-price">{item.salePrice}</span>
                    <span className="size-price-price"><strike>{item.originalPrice}</strike></span>
                </div>
                {itemBtn}
            </div>
        </div>
    )
}

export default ProductSizeDetails