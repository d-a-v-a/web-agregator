import React from "react";
import styles from "./PreviewProject.module.css"
import Button from "../ui/Button/Button";
import image1 from "../../assets/images/image1.jpg"

export interface Props {
    image: any;
    category: string;
    name: string;
}
const PreviewProject: React.FC<Props> = ({image = image1, category = 'Аркады', name = 'Merge Комбинаторика'}: Props) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.head}>
                <img className={styles.image} src={image} alt=""/>
            </div>
            <div className={styles.description}>
                <div className={styles.category}>{category}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.button}>
                    <Button>Играть</Button>
                </div>
            </div>
        </div>
    )
}

export default PreviewProject;