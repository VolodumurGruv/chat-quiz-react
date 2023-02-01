import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import msgSlice from "./slices/msgSlice";

export default configureStore({
	reducer: {
		auth: authSlice,
		msg: msgSlice
	},
});
