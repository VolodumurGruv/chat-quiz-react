import "../styles/header.scss";

function Header() {
	return (
		<div className="header">
			<div className="header_logo font_logo">Q</div>
			<div className="header_btn">
				<button className="btn">
					{"login true false" ? "logout" : "login eith google"}
				</button>
			</div>
		</div>
	);
}

export default Header;
