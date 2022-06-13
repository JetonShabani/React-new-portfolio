import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import hackernews from '../../img/hackernews.png';
import ibanval from '../../img/ibanval.png';
import movie from '../../img/movie.png';
import weather from '../../img/weather.jpg';
import milionario from '../../img/milionario.jpg'
import 'swiper/css';

import {themeContext} from '../../Context';
import {useContext } from "react";


export const Portfolio = () => {

    
    const theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">

        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Neueste Projekte</span>
        <span>Portfolio</span>

        {/* slider */}

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://jeton-movies-search.netlify.app/" target='_blank'rel='noreferrer'>
                <img src={movie} alt="" />
                </a>
            </SwiperSlide>
            
            <SwiperSlide>
            <a href="https://vadim-hacker-news.netlify.app/" target='_blank' rel='noreferrer'>
                <img src={hackernews} alt="" />
            </a>
            </SwiperSlide>

            <SwiperSlide>
            <a href="https://jetonshabani.github.io/Weather-App.github.io/" target='_blank' rel='noreferrer'>
                <img src={weather} alt="" />
            </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://github.com/JetonShabani/quiz-game" target='_blank'rel='noreferrer'>
                <img src={milionario} alt="" />
                </a>
            </SwiperSlide>
            
            <SwiperSlide>
            <a href="https://iban-validator.netlify.app/" target='_blank' rel='noreferrer'>
                <img src={ibanval} alt="" />
            </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
