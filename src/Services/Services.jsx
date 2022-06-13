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
    const transition = { duration : 1, type: 'spring'}
    const theme =useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
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

            <motion.div 
            style={{ left: '14rem'}}
            whileInView={{left: '14rem'}}
            initial={{left: '25%rem'}}
            transition={{transition}}
            >
                <Card
                    emoji = {heartemoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>

            {/* second card */}
            <motion.div style={{ top:"12rem", left:"-4rem"}}
            initial={{ left: "-11rem", top: "12rem "}}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            >
                <Card 
                    emoji ={glasses}
                    heading={"Back-end"}
                    detail={"Node.js, Express, MongoDB, SQL, MySQL, SQLite, NoSQL"}
                />
            </motion.div>

             {/* third card */}
             <motion.div style={{ top:"19rem", left:"12rem"}}
             initial={{ top: "19rem", left:"25rem" }}
             whileInView={{ left: "12rem" }}
             transition={{ transition }}
             >
                <Card 
                    emoji ={humble}
                    heading={"Front-end"}
                    detail={"Html, Css, JavaScript, React, React Native, TypeScript, Scss"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>

    </div>
  )
}
