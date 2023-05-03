import React from "react";
import "./Project.css"
import {Link} from "react-router-dom";
import PopularProjects from "../../components/PopularProjects";
import likeSvg from "../../assets/images/like.svg"
import dislikeSvg from "../../assets/images/dislike.svg"
import image1 from "../../assets/images/image1.jpg"
import SwiperProjects from "../../components/ui/Swiper";
import {Navigation, Pagination} from "swiper";
import PreviewProject from "../../components/PreviewProject";

function Project() {
    return(
        <div className="project-page">
            <div className="container-small">
                <div className="bread-crumbs">
                    <Link className='bread-crumbs__link' to='/'>Площадка проектов</Link>
                </div>
                <h1 style={{color: 'white'}}>Комбинаторика</h1>
                <SwiperProjects/>
                <div className="project-desc">
                    <h2 className="project-desc__title">Описание проекта</h2>
                    <div className="project-desc__text">
                        Коротокое, но лаконичное описание будущего крутого проекта.
                        Этот текст не имеет смысловой нагрузки, но нужен для визуала.
                        Коротокое, но лаконичное описание будущего крутого проекта.
                        Этот текст не имеет смысловой нагрузки, но нужен для визуала.
                    </div>
                </div>
                <div className="project-start">
                    <h2>Запуск игры</h2>
                    <div className="project-start__image">
                        <img src={image1} alt=""/>
                    </div>
                    <div className="project-start__bottom">
                        <div className="project-start__bottom-like">
                            <img src={likeSvg} alt=""/>
                        </div>
                        <div className="project-start__bottom-dislike">
                            <img src={dislikeSvg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="project-similar">
                    <h2>Похожие игры</h2>
                    <SwiperProjects/>
                </div>
            </div>
        </div>
    )
}

export default Project