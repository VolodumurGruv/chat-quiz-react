export const getQuizQuestions = async (fn) => {
	const _URL = "https://opentdb.com/api.php?amount=10";

	const data = await fetch(_URL);
	const questions = await data.json();

	if (typeof fn === "function") fn(questions?.results);
};
