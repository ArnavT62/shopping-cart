import { useOutletContext } from 'react-router'

const Cart = () => {
    const { cart, removeFromCart } = useOutletContext()
    
    const totalCost = cart.reduce((total, item) => {
        return total + (item.price * item.qty)
    }, 0)
    
    return(
        <>
            <h1>Cart</h1>
            <div>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} style={{width: '100px', height: '100px', objectFit: 'contain'}} />
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.qty}</p>
                                <p>Subtotal: ${(item.price * item.qty).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                        <div>
                            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default Cart;