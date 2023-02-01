import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMSG } from "../../redux/slices/msgSlice";
import {
	addMessage,
	getMessage,
	updateMessage,
} from "../../firebaseInit/handleData";

function ChatBox() {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();
	const msg = useSelector((state) => state.msg.message);
	const { userUID } = useSelector((state) => state.auth);

	useEffect(() => {
		const unsub = getMessage(userUID, (a) =>
			!!a.message ? dispatch(setMSG({ msg: a })) : null
		);

		return () => unsub;
	}, []);

	const handleTextArea = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const send = (e) => {
		e.preventDefault();

		if (!msg?.message) {
			addMessage(userUID, { message: [message] });
			setMessage("");
			return;
		}
		updateMessage(userUID, message);
		setMessage("");
	};

	return (
		<div className="main__continer_right">
			<div className="main__messanges" style={{ color: "white" }}>
				{msg?.message
					? msg?.message.map((msg, i) => (
							<p key={i} className="main__messanges_msg">
								{msg}
							</p>
					  ))
					: ""}
			</div>
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
