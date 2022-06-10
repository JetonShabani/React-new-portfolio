import React from 'react';
import './Services.css'
import heartemoji from "../img/heartemoji.png";
import glasses from "../img/glasses.png";
import humble from "../img/humble.png";
import { Card } from '../components/Card/Card';
import resume from './resume.pdf';
import { motion } from 'framer-motion';

import {themeContext} from '../Context';
import {useContext } from "react";



export const Services = () => {

    const theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="services">
        {/*left side  */}
        <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>Meine hervorragenden</span>
        <span>Dienstleistungen</span>
        <spane>
        Meine Dienstleistungen umfassen alle Fähigkeiten,
        <br /> 
        die ich im Laufe der Jahre gelernt habe.

        </spane>

        <a href={resume} download>
        
        <button className='button s-button'>Lebenslauf</button>

        </a>

        </div>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94'}}></div> 
        
        {/*right side  */}
        <div className="cards">

            <div style={{ left: '14rem'}}>
                <Card
                    emoji = {heartemoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>

            {/* second card */}
            <div style={{ top:"12rem", left:"-4rem"}}>
                <Card 
                    emoji ={glasses}
                    heading={"Back-end"}
                    detail={"Node.js, Express, MongoDB, SQL, MySQL, SQLite, NoSQL"}
                />
            </div>

             {/* third card */}
             <div style={{ top:"19rem", left:"12rem"}}>
                <Card 
                    emoji ={humble}
                    heading={"Front-end"}
                    detail={"Html, Css, JavaScript, React, React Native, TypeScript, Scss"}
                />
            </div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>

    </div>
  )
}
