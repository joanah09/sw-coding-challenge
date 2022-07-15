import ItemCount from './ItemCount';

function ItemDetails(item) {
    return (
        <div className="item_details">
            <div className="item_product-image">
                <img src={`${item.imageUrl}`} alt={item.name} />
                <div className="item-percent">
                    <span>-{item.percentOff}%</span>
                </div>
            </div>
            
            <div className="item-overview">
                <div className="item-overview-title">
                    <h3>{item.name}</h3>
                </div>
                <ItemCount item={item} />
            </div>
        </div>
    )   
}

export default ItemDetails