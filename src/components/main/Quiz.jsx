import { addMessage } from "../../firebaseInit/handleData";
import { useDispatch, useSelector } from "react-redux";
import { setStart, setQuestions, setIsQuiz } from "../../redux/slices/msgSlice";
import "../../styles/quiz.scss";
import { getQuizQuestions } from "./quizAPI";
import { useEffect } from "react";
import Questionare from "./Questionare";

function Quiz() {
	const { userUID } = useSelector((state) => state.auth);
	const { startQuiz, isQuiz } = useSelector((state) => state.msg);
	const dispatch = useDispatch();

	const start = () => {
		addMessage(userUID, { message: [] });
		dispatch(setStart(true));

		getQuizQuestions((ques) => {
			dispatch(setQuestions({ ques }));
		});

		const time = setTimeout(() => {
			dispatch(setIsQuiz(true));
			clearTimeout(time);
		}, 3000);
	};

	const cancel = () => {
		dispatch(setStart(false));
		dispatch(setIsQuiz(false));
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
			{isQuiz && (
				<div className="quiz__questions">
					<Questionare />
				</div>
			)}
		</>
	);
}

export default Quiz;
