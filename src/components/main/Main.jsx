import "../../styles/main.scss";
import ChatBox from "./ChatBox";
import Quiz from "./Quiz";

function Main() {
	return (
		<section className="main">
			<div className="main__continer_left">
				<Quiz />
			</div>
			<ChatBox />
		</section>
	);
}

export default Main;
