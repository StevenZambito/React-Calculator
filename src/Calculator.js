import React from "react";
import styles from "./Calculator.module.css";

export const Calculator = () => {
	return (
		<div className={styles.CalculatorShell}>
			<div className={styles.screenSection}>
				<p className={styles.screen}></p>
			</div>
			<div className={styles.hey}>
				<button className={styles.meow}>Clear</button>
				<button className={styles.meow}>/</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.meow}>7</button>
				<button className={styles.meow}>8</button>
				<button className={styles.meow}>9</button>
				<button className={styles.meow}>x</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.meow}>4</button>
				<button className={styles.meow}>5</button>
				<button className={styles.meow}>6</button>
				<button className={styles.meow}>-</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.meow}>1</button>
				<button className={styles.meow}>2</button>
				<button className={styles.meow}>3</button>
				<button className={styles.meow}>+</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.meows}>0</button>
				<button className={styles.meow}>.</button>
				<button className={styles.meow}>=</button>
			</div>
		</div>
	);
};
