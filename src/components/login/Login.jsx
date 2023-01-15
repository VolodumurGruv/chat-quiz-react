import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import { auth } from "../../firebaseInit/firebaseInit";
import {
	getRedirectResult,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import GoogleSVG from "./GoogleSVG";

function Login() {
	const dispatch = useDispatch();
	const provider = new GoogleAuthProvider();

	useEffect(() => {
		// onAuthStateChanged(auth, (user) => {
		// 	if (user) {
		// 		// User is signed in, see docs for a list of available properties
		// 		// https://firebase.google.com/docs/reference/js/firebase.User
		// 		const uid = user.uid;
		// 		console.log(user);
		// 		// ...
		// 	} else {
		// 		// User is signed out
		// 		// ...
		// 	}
		// });
		const unsub = getRedirectResult(auth)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				if (user) {
					dispatch(
						setAuth({
							isAuth: true,
							displayName: user.displayName,
							photoURL: user.photoURL,
						})
					);
				}
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.

				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.error(error);
			});

		return () => unsub;
	}, []);

	const handleAuth = () => {
		// signInWithPopup(auth, provider);
		signInWithRedirect(auth, provider);
	};

	return (
		<div className="header__login-btn-wraper">
			<button className="header__login-btn" onClick={handleAuth}>
				<GoogleSVG id={"google"} /> <span>Login with Google</span>
			</button>
		</div>
	);
}

export default Login;
