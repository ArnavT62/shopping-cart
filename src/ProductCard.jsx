import { useState } from 'react'
const ProductCard = ({product, addToCart}) => {
    const [qty, setQty] = useState(1);
    const increaseQty=()=>{setQty(qty+1)}
    const decreaseQty=()=>{setQty(qty>1?qty-1:1)}
    const handleChange=(e)=>{setQty(parseInt(e.target.value) || 1)}
    const handleAddToCart=()=>{
        addToCart(product, qty)
        // Reset quantity after adding
        setQty(1)
    }
    return(
        <div>
            <h3>{product.title}</h3>
            <h2>{product.price}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
         
            <div>
                <button onClick={decreaseQty}>-</button>
                <input type="number" value={qty} onChange={handleChange} min="1"/>
                <button onClick={increaseQty}>+</button>
           
            </div>
            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>

    )
}
export default ProductCard;