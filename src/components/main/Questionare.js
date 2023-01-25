import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStart, setIsQuiz } from "../../redux/slices/msgSlice";
import { parseString } from "./parseString";
import "../../styles/questions.scss";

function Questionare() {
	const [userAnswer, setUserAnswer] = useState("");
	const [answers, setAnswers] = useState([]);
	const [userScore, setUserScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const dispatch = useDispatch();

	const [step, setStep] = useState(0);
	const { ques } = useSelector((state) => state.msg);

	useEffect(() => {
		setAnswers([...ques[step].incorrect_answers, ques[step].correct_answer]);
	}, [step]);

	const nextQuestion = (e) => {
		if (e) {
			e.preventDefault();

			setUserAnswer(e.target.innerText);
		}
		score();
		setStep(step + 1);
		if (step >= ques.length - 1) close();
	};

	const close = () => {
		dispatch(setStart(false));
		dispatch(setIsQuiz(false));
		setStep(0);
		setShowScore(true);
	};

	const score = () => {
		if (userAnswer === ques[step].correct_answer) {
			setUserScore(userScore + 1);
		}

		console.log(userScore);
		console.log(userAnswer);
		console.log(ques[step].correct_answer);
	};

	return (
		<div className="questions">
			<h3> {parseString(ques[step].question)} </h3>
			<div className="btn__group">
				{answers.map((ques, i) => (
					<button key={i} className="btn btn__mt_30" onClick={nextQuestion}>
						{ques}
					</button>
				))}
			</div>
		</div>
	);
}

export default Questionare;
