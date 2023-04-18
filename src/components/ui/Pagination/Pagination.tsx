import React from "react";
import styles from "./Pagination.module.css"
import arrow from "../../../assets/images/arrow_left.svg"

export interface Props {
    current: string;
    total: string;
}

const Pagination = (props: Props) => {
    return (
        <div className={styles.pagination}>
            <button disabled={props.current === '1'} type='button' className={styles.pagLeft}>
                <img className={styles.arrow} src={arrow} alt=""/>
            </button>
            <div className={styles.pagText}>{props.current} из {props.total}</div>
            <button disabled={props.current === props.total} type='button' className={styles.pagRight}>
                <img className={styles.arrow} src={arrow} alt=""/>
            </button>
        </div>
    )
}

export default Pagination