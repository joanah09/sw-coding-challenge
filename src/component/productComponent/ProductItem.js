import { useState } from 'react';

function ProductItem(item) {
  // console.log('items!', item);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive)
  }
  const styles = {
    color: isActive ? 'rgb(223 29 29)' : null
  }

  return (
    <div className="product_item">
      <div className="product_item-image">
        <img src={`${item.imageUrl}`} alt={item.name} />
        <div className="product_favorite">
          <span className="material-symbols-outlined"
            style={styles}
            onClick={toggleClass}>favorite</span>
        </div>  
      </div>
      <div className="product_info"> 
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>{item.originalPrice}</h4>
      </div>

    </div>  
  );
}

export default ProductItem;
