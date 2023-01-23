export const steper = (arr) => {
	let step = -1;

	return () => {
		if (!Array.isArray(arr))
			throw new Error("Steper error: It should be an array!");

		step += 1;

		if (step >= arr.length) step = -1;

		console.log(step);
		return arr[step];
	};
};

export const getQuizQuestions = async (fn) => {
	const _URL = "https://opentdb.com/api.php?amount=10";

	const data = await fetch(_URL);
	const questions = await data.json();
	console.log(questions?.results);
	if (typeof fn === "function") fn(questions?.results);
};
