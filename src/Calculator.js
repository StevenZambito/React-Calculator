import React from "react";
import styles from "./Calculator.module.css";
import { Results } from "./Results.js";
import { Button } from "./Button.js";

export const Calculator = () => {
	return (
		<div className={styles.CalculatorShell}>
			<Results />
			<div className={styles.hey}>
				<Button />
				<Button />
			</div>
			<div className={styles.hey}>
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
			<div className={styles.hey}>
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
			<div className={styles.hey}>
				<Button />
				<Button />
				<Button />
				<Button />
			</div>
			<div className={styles.hey}>
				<Button />
				<Button />
				<Button />
			</div>
		</div>
	);
};
