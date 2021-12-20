import React from "react";
import classes from "../styles/Videos.module.css";
import Signup from "./pages/Signup";
import Video from "./Video";

export default function Videos() {
	return (
		<div>
			<div className={classes.videos}>
				<Video />
				<Video />
				<Video />
				<Video />
				<Video />
				<Signup />
			</div>
		</div>
	);
}
