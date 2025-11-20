import { useState } from 'react'
const ProductCard = ({product}) => {
    const [qty, setQty] = useState(1);
    const increaseQty=()=>{setQty(qty+1)}
    const decreaseQty=()=>{setQty(qty>1?qty-1:1)}
    const handleChange=(e)=>{setQty(parseInt(e.target.value) || 1)}
    const handleAddToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id)
        
        if (existingItemIndex >= 0) {
            // Update quantity if item already exists
            cartItems[existingItemIndex].qty += qty
        } else {
            // Add new item to cart
            cartItems.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: qty
            })
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItems))
        // Dispatch custom event to notify cart component
        window.dispatchEvent(new Event('cartUpdated'))
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