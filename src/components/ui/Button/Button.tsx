import React from "react";
import styles from "./Button.module.css"

export interface IButtonProps {
    children?: React.ReactNode;
}
const Button: React.FC<IButtonProps> =
    ({
        children
    }) => {

        return (
            <button className={styles.btn} type='button'>
                <span className={styles.wrapper}>
                    {children}
                </span>
            </button>
        );
    };

export default Button;