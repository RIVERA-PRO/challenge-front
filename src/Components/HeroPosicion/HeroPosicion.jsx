import React from 'react'
import './HeroPosicion.css'
import { Link as Anchor } from "react-router-dom";
export default function HeroPosicion() {
    return (
        <div className='HeroPosicion'>
            <h1 className='title'> TABLA DE POSICIONES DE LA LIGA PROFESIONAL DE FÚTBOL ARGENTINO
            </h1>
            <Anchor onClick={() => { document.querySelector('.table-contain').scrollIntoView({ behavior: 'smooth' }); }} className='btn-1'>Más</Anchor>
        </div>
    )
}
