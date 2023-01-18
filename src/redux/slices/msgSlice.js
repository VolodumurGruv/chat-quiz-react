import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
	name: "auth",
	initialState: {
		message: null,
	},
	reducers: {
		setMSG: (state, action) => {
			state.message = action.payload.msg;
		},
	},
});

export const { setMSG } = msgSlice.actions;

export default msgSlice.reducer;
