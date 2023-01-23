import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMSG } from "../../redux/slices/msgSlice";
import { addMessage, getMessage } from "../../firebaseInit/handleData";

function ChatBox() {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();
	const { userUID } = useSelector((state) => state.auth);

	useEffect(() => {
		const unsub = getMessage(userUID, (a) => dispatch(setMSG({ msg: a })));

		return () => unsub;
	}, []);

	const handleTextArea = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const send = (e) => {
		e.preventDefault();

		addMessage(userUID, { message: message });

		setMessage("");
	};

	return (
		<div className="main__continer_right">
			<div className="main__messanges" style={{ color: "white" }}></div>
			<div className="main__chat-box">
				<form onSubmit={send}>
					<textarea
						className="main__chat-box-field"
						name="chatBox"
						id="chatBox"
						cols="32"
						rows="5"
						value={message}
						onChange={handleTextArea}
					></textarea>
					<input type="submit" value="Send" className="btn btn__chat-box_send" />
				</form>
			</div>
		</div>
	);
}

export default ChatBox;
