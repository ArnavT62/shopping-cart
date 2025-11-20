import {useState, useEffect} from 'react'
import Navbar from './Navbar.jsx'
import ProductCard from './ProductCard.jsx'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products)
    return(
        <>
            <div>
                <h1>Shop</h1>
                <div>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Shop;