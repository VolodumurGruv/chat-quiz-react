import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
	name: "msg",
	initialState: {
		message: null,
		startQuiz: false
	},
	reducers: {
		setMSG: (state, action) => {
			state.message = action.payload.msg;
		},

		setStart: (state, action) => {
			state.startQuiz = action.payload
		}
	},
});

export const { setMSG, setStart } = msgSlice.actions;

export default msgSlice.reducer;
