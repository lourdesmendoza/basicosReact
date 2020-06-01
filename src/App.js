import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
	// Create product listing
	const [ products, saveProducts ] = useState([
		{ id: 1, nombre: 'Camisa', precio: 50 },
		{ id: 2, nombre: 'Pantalon', precio: 40 },
		{ id: 3, nombre: 'Medias', precio: 30 },
		{ id: 4, nombre: 'Remera', precio: 20 },
	]);

	// Shopping cart state
	const [cart, addCart] = useState([]);

	// Get date
	const date = new Date().getFullYear();

	return (
		<Fragment>
			<Header
				titulo='Tienda Virtual'
				numero={20}
			/>
			<h1>Lista de productos</h1>
			
			<div className="contentApp">
				{products.map(product => (
					<Product
					key={product.id}
					product={product}
					products={products}
					cart={cart}
					addCart={addCart} />
					))}

				<Cart
					cart={cart}
					addCart={addCart}
				/>
			</div>
			<Footer
				fecha={date}
			/>
		</Fragment>
	);
}

export default App;
