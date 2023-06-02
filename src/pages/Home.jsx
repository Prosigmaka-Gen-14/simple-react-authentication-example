import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Home () {
	const token = useSelector(state => state.auth.token)

	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/660/products')
			.then(res => setProducts(res.data))
			.catch(err => alert('Data ini hanya bisa diakses setelah login'))
	}, [])

	return <>
		<h1>Ini Home</h1>
		<Link to="/login">
			<button>To Login</button>
		</Link>
		<hr />
		<h3>Daftar Produk</h3>
		<ul>
			{products.map(product =>
				<li key={product.id}>
					{product.title} dengan harga {product.price}
				</li>
			)}
		</ul>
	</>
}