import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		displayName: null,
		photoURL: null,
		isAuth: false,
		userUID: null,
	},
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload.isAuth;
			state.displayName = action.payload.displayName;
			state.photoURL = action.payload.photoURL;
			state.userUID = action.payload.uid;
		},
	},
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
