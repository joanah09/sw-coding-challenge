import { useState } from "react"

function ProductSizeButton(item) {
    const [isAvailable, setAvailable] = useState(true)
    function sizeBtn() {
        console.log("click")
        setAvailable(prevState => !isAvailable)
    }

    return (
        <button disabled={item.isAvailable} onClick={sizeBtn} className={isAvailable ? "" : "active"}>{item.label}</button>
    )
}

export default ProductSizeButton