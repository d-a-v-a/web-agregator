import React from "react";
import styles from "./SelectionProjects.module.css"
import arrow from "../../assets/images/arrow_left.svg"
import dropdownOutline from "../../assets/images/dropdown_outline.svg"
import Pagination from "../ui/Pagination/Pagination";
import PreviewProject from "../PreviewProject/PreviewProject"
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"

const SelectionProjects = () => {
    return (
        <div>
            <h2 className={styles.title}>Подборка проектов &gt;</h2>
            <div className={styles.options}>
                <span className={styles.found}>Найдено 31 проект</span>
                <Pagination current='1' total='5'/>
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHead}>
                        <span>По популярности</span>
                        <img className={styles.dropdownOutline} src={dropdownOutline} alt=""/>
                    </div>
                    <div className={styles.dropdownBody}></div>
                </div>
            </div>
            <div className={styles.grid}>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image2} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image3} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image2} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image2} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image3} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image3} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image2} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
                <PreviewProject image={image1} category='Аркады' name='Merge Комбинаторика'/>
            </div>
        </div>
    )
}

export default SelectionProjects