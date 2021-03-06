import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
	return (
		<button
			className={
				props.isLarge
					? [styles.largeButton, styles.calcButton].join(" ")
					: styles.calcButton
			}
		>
			{props.value}
		</button>
	);
};
