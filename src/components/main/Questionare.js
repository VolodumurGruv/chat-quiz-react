import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { steper } from "./quizAPI";

import "../../styles/questions.scss";

function Questionare() {
	const [userAnswer, setUserAnswer] = useState("");
	const { ques } = useSelector((state) => state.msg);
	const step = steper(ques);

	useEffect(() => {
		console.log(userAnswer);
	}, [userAnswer]);

	const nextQuestion = (e) => {
		if (e) {
			e.preventDefault();

			setUserAnswer(e.target.innerText);
		}

		const question = step();
		console.log(question);
		const answers = [...question.incorrect_answers, question.correct_answer];

		return (
			<div className="questions">
				<h3> {question.question} </h3>
				<div className="btn__group">
					{answers.map((ques, i) => (
						<button key={i} className="btn btn__mt_30" onClick={nextQuestion}>
							{ques}
						</button>
					))}
				</div>
			</div>
		);
	};
	return (
		<div>
			<div>{nextQuestion()}</div>
		</div>
	);
}

export default Questionare;
