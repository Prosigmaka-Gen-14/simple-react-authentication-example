import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken, setUser } from '../store/authSlice.js'

export default function Login () {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const setInputValue = event => setFormData({
		...formData,
		[event.target.name]: event.target.value
	})

	const handleLogin = event => {
		event.preventDefault()
		axios.post('http://localhost:3000/login', formData)
			.then(res => {
				const { accessToken, user } = res.data
				dispatch(setToken(accessToken))
				dispatch(setUser(user))
				navigate('/admin')
			})
			.catch(err => {
				alert('Terjadi kesalahan')
				console.error(err)
				console.error(err.response)
			})
	}

	return <>
		<h1>Ini Login</h1>
		<Link to="/">
			<button>To Home</button>
		</Link>

		<hr />

		<form onSubmit={handleLogin}>
			<div>
				Email: <br />
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={setInputValue} />
			</div>
			<br />
			<div>
				Password: <br />
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={setInputValue} />
			</div>
			<br />
			<button>
				Login
			</button>
		</form>
	</>
}