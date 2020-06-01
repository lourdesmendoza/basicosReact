import React from 'react';
import './Product.scss';

const Product = ({product, products, cart, addCart}) => {
    const {nombre, precio, id} = product

    // Add to cart
    const productSelect = id => {
        const getProduct = products.filter(product => product.id === id)[0];
        addCart([
            ...cart,
            getProduct
        ]);
        console.log('Comprando...', id);
    }

    // Removed product cart
    const removedProduct = id => {
        const removeProduct = cart.filter(product => product.id !== id);
        // Set product state
        addCart(removeProduct)

    }

    return (
        <div className="contentProduct">
            <h2 className="contentProduct__name">{nombre}</h2>
            <p className="contentProdcut__price">${precio}</p>
                { products
                ?
                    (
                        <button
                            className="contentProduct__button"
                            type="button"
                            id="buy"
                            onClick={() => productSelect(id)}
                        > Buy </button>
                    )

                :
                        (
                            <button
                                className="contentProduct__buttonRemoved"
                                type="button"
                                onClick={()=> removedProduct(id)}
                            > Removed </button>
                        )

                }
        </div>
    );
}
 
export default Product;