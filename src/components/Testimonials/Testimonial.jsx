import React from 'react';
import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profilePic1.jpg';
import profilePic2 from '../../img/profilePic2.jpg';
import profilePic3 from '../../img/profilePic3.jpg';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export const Testimonial = () => {
    const clients =[
        {
        img: profilePic1,
        review: "Jeton war der engagierteste Schüler in seiner gesamten Gruppe, seine Einstellung zum Lernen ist tadellos, er zeigte nicht einen Funken Frustration und hielt sich selbst und alle um ihn herum immer sehr motiviert. Ich bin sicher, dass es keine Aufgabe gibt, die zu groß für ihn ist, und ich bin gespannt darauf, was er von hier aus erreichen wird. Es wäre mir eine Freude, wieder mit ihm zu arbeiten."
        },
        {
        img: profilePic2,
        review: "Fleißig und freundlich, war super nett, für ein WBS-Projekt zusammenzuarbeiten."
        },
        {
            img: profilePic3,
            review: "Sehr talentierter Mann. Ich musste mit ihm an einigen Projekten arbeiten und er war ein gutes Teammitglied. Es war sehr angenehm, mit ihm zu arbeiten."
            }
    ];

  return (
    <div className="t-wrapper" id="Testimonial">
        <div className="t-heading">
            <span>sehen, was </span>
            <span>meine alten Kollegen </span>
            <span>über mich sagen</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/*slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >

            {clients.map((client,index) => {
                return(
                    <SwiperSlide key={index}>
                         <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}
