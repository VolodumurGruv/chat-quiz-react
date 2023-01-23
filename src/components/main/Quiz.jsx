import { addMessage } from "../../firebaseInit/handleData";
import { useDispatch, useSelector } from "react-redux";
import { setStart } from "../../redux/slices/msgSlice";
import "../../styles/quiz.scss";

function Quiz() {
	const { userUID } = useSelector((state) => state.auth);
	const { startQuiz } = useSelector((state) => state.msg);
	const dispatch = useDispatch();

	const start = () => {
		addMessage(userUID, { message: [] });
		dispatch(setStart(true));
	};

	const cancel = () => {
		dispatch(setStart(false));
	};

	return (
		<>
			{" "}
			{!startQuiz ? (
				<div className="quiz">
					<p className="quiz__text">START if you are ready to star Quiz</p>
					<button className="btn" onClick={start}>
						START
					</button>
				</div>
			) : (
				<div className="quiz">
					<p className="quiz__text">Ready to star The Quiz</p>
					<button className="btn btn__cancel" onClick={cancel}>
						CANCEL
					</button>
				</div>
			)}
		</>
	);
}

export default Quiz;
