import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor } from "react-router-dom";



export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);





    return (
        <header>
            <nav className={scrolled ? "navbar scrolled" : "navbar"}>

                <div className='logo'>

                    <Anchor to={`/`} >  <img src="../../../img/logo2.png" alt="logo" /></Anchor>
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src="../../../img/logo2.png" alt="logo" />
                    </div>
                    <div className='enlaces'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/posiciones`} >Posiciones</Anchor>
                    </div>


                </div>



                <div className='navi'>
                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='enlaces2'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/posiciones`} >Posiciones</Anchor>
                    </div>
                </div>

            </nav>


        </header>
    );
}
