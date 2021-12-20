import React from "react";

export default function Checkbox({ text, ...rest }) {
	return (
		<div>
			<label>
				<input {...rest} />
				<span>{text}</span>
			</label>
		</div>
	);
}
