import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		displayName: null,
		photoURL: null,
		isAuth: false,
	},
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload.isAuth;
			state.displayName = action.payload.displayName;
			state.photoURL = action.payload.photoURL;
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
