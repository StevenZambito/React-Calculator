import React from "react";
import styles from "./Calculator.module.css";
import { Results } from "./Results.js";
import { Button } from "./Button.js";

export const Calculator = () => {
	return (
		<div className={styles.CalculatorShell}>
			<Results />
			<div className={styles.row}>
				<Button value="Clear" />
				<Button value="÷" />
			</div>
			<div className={styles.row}>
				<Button value={7} />
				<Button value={8} />
				<Button value={9} />
				<Button value="x" />
			</div>
			<div className={styles.row}>
				<Button value={4} />
				<Button value={5} />
				<Button value={6} />
				<Button value="-" />
			</div>
			<div className={styles.row}>
				<Button value={1} />
				<Button value={2} />
				<Button value={3} />
				<Button value="+" />
			</div>
			<div className={styles.row}>
				<Button value={0} />
				<Button value="." />
				<Button value="=" />
			</div>
		</div>
	);
};
