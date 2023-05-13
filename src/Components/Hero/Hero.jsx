import React, { useState } from 'react';
import './Hero.css'

import { Link as Anchor } from "react-router-dom";

export default function Hero() {



    return (
        <div className='heroContain' id='heroContain-id'>

            <div className='text-hero1'>
                <h6>POSICIONES DEL FUTBOL</h6>
                <h1>BIENVENIDO A FÚTBOL ARGENTINO</h1>
                <p>Aquí encontrarás toda la información más reciente sobre los equipos, jugadores y partidos del fútbol argentino.</p>

                <Anchor to={'/posiciones'} className='btn-1' >Empezar</Anchor>

            </div>
        </div>
    )
}
