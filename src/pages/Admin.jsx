import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { resetAuthData } from "../store/authSlice.js"

export default function Admin () {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const user = useSelector(state => state.auth.user)

	const handleLogout = () => {
		dispatch(resetAuthData())
		navigate('/')
	}

	return <>
		<h1>Ini Admin</h1>
		<button onClick={handleLogout}>
			Logout
		</button>
		<Link to="/">
			<button>
				To Home
			</button>
		</Link>
		<hr />
		<h3>Logged In User</h3>
		<p>ID: {user.id}</p>
		<p>Email: {user.email}</p>
		<p>User Name: {user.username}</p>
	</>
}