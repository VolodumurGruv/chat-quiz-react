import "../styles/header.scss";

function Header() {
	return (
		<div className="header">
			<div className="header__logo font__logo">Q</div>
			<div className="header__btn">
				<button className="btn">
					{"login true false" ? "logout" : "login eith google"}
				</button>
			</div>
		</div>
	);
}

export default Header;
