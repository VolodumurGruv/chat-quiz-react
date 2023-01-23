import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
	name: "msg",
	initialState: {
		message: null,
		startQuiz: false,
		ques: [],
		isQuiz: false,
	},
	reducers: {
		setMSG: (state, action) => {
			state.message = action.payload.msg;
		},

		setStart: (state, action) => {
			state.startQuiz = action.payload;
		},

		setQuestions: (state, action) => {
			console.log(action);
			state.ques = action.payload.ques;
		},

		setIsQuiz: (state, action) => {
			state.isQuiz = action.payload;
		},
	},
});

export const { setMSG, setStart, setQuestions, setIsQuiz } = msgSlice.actions;

export default msgSlice.reducer;
