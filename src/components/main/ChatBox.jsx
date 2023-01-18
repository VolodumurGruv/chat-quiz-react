import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMSG } from "../../redux/slices/msgSlice";

function ChatBox() {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();

	const handleTextArea = (e) => setMessage(e.target.value);

	const send = (e) => {
		e.preventDafault();
		dispatch(setMSG(message));
	};
	return (
		<div className="main__continer_right">
			<div className="main__messanges" style={{ color: "white" }}>
				sdfsdfasd
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit ipsa
					tempora sapiente nobis quos? Facere aut architecto voluptate, nisi beatae
					quasi omnis iure delectus, corporis veniam sed atque. Hic!
				</p>
			</div>
			<div className="main__chat-box">
				<form onSubmit={send}>
					<textarea
						className="main__chat-box-field"
						name="chatBox"
						id="chatBox"
						cols="32"
						rows="5"
						value=""
						onChange={handleTextArea}
					></textarea>
					<input type="submit" value="Send" className="btn btn__chat-box_send" />
				</form>
			</div>
		</div>
	);
}

export default ChatBox;
