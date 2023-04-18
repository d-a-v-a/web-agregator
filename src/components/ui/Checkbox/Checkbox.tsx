import React from "react";
import styles from "./Checkbox.module.css"

export interface Props {
    text: string;
    name: string;
}

const Checkbox = ({name, text}: Props) => {
    return(
        <label className={styles.label}>
            <input name={name} className={styles.input} type="checkbox"/>
            <div className={styles.box}></div>
            <div className={styles.text}>{text}</div>
        </label>
    )
}

export default Checkbox