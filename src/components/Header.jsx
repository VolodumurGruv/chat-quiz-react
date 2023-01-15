import "../styles/header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/slices/authSlice";
import { auth } from "../firebaseInit/firebaseInit";
import { signOut } from "firebase/auth";

function Header() {
	const { isAuth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { displayName, photoURL } = useSelector((state) => state.auth);
	console.log(photoURL);
	const logout = async () => {
		try {
			await signOut(auth).then(() => {
				// Sign-out successful.
			});
			dispatch(setAuth(false));
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="header">
			<div className="header__logo font__logo">Q</div>
			<div className="header__btn">
				{isAuth ? (
					<div className="header__user">
						<div>
							<img
								className="header__user-photo"
								src={photoURL}
								alt="avatar picture"
							/>
						</div>
						<div>
							<span className="header__user-name">{displayName}</span>
						</div>
						<div>
							<button className="btn" onClick={logout}>
								Logout
							</button>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Header;
