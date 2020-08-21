import React from "react";
import styles from "./Calculator.module.css";

export const Calculator = () => {
	return (
		<div className={styles.CalculatorShell}>
			<div className={styles.screenSection}>
				<p className={styles.screen}>0</p>
			</div>
			<div className={styles.hey}>
				<button className={styles.calcButton}>Clear</button>
				<button className={styles.calcButton}>÷</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.calcButton}>7</button>
				<button className={styles.calcButton}>8</button>
				<button className={styles.calcButton}>9</button>
				<button className={styles.calcButton}>x</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.calcButton}>4</button>
				<button className={styles.calcButton}>5</button>
				<button className={styles.calcButton}>6</button>
				<button className={styles.calcButton}>-</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.calcButton}>1</button>
				<button className={styles.calcButton}>2</button>
				<button className={styles.calcButton}>3</button>
				<button className={styles.calcButton}>+</button>
			</div>
			<div className={styles.hey}>
				<button className={styles.calcButtonTwo}>0</button>
				<button className={styles.calcButton}>.</button>
				<button className={styles.calcButton}>=</button>
			</div>
		</div>
	);
};
