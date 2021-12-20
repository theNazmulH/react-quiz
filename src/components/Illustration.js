import React from "react";
import signupImage from "../images/signup.svg";
import classes from "../styles/Illustration.module.css";

export default function Illustration() {
	return (
		<div class={classes.illustration}>
			<img src={signupImage} alt="Signup" />
		</div>
	);
}
