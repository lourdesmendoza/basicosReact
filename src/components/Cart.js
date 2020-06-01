import React from 'react';
import Product from './Product';

import './Cart.scss';

const Cart = ({ cart, addCart }) => {
    return(
        <div className="contentCart">
            <h2 className="title">Your shopping cart</h2>
            {cart.length === 0
            ? <p>Empty cart</p>
            : cart.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    cart={cart}
                    addCart={addCart}
                />
            ))
            }
        </div>
    );
};

export default Cart;