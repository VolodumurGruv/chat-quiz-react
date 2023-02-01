import { useSelector } from "react-redux";
import Login from "./login/Login";
import Main from "./main/Main";

function Layout() {
	const { isAuth } = useSelector((state) => state.auth);

	return <>{!isAuth ? <Login /> : <Main />}</>;
}

export default Layout;
