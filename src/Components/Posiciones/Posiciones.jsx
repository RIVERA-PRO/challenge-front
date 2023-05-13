import React, { useState, useEffect } from 'react';
import './Posiciones.css';

import Spiral from '../Spiral/Spiral'

export default function Posiciones() {
    const [posiciones, setPosiciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/posiciones')
            .then(response => response.json())
            .then(data => {
                setPosiciones(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading || error) {
        return <div className='table-contain'>
            <Spiral />
        </div>;
    }

    return (
        <div className='table-contain'>
            <table id="tabla">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>G</th>
                        <th>E</th>
                        <th>P</th>
                        <th className='none'>GF</th>
                        <th className='none'>GC</th>
                        <th className='none'>DG</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {posiciones.map((posicion, index) => (
                        <tr key={posicion._id} className={`${index < 4 ? 'equipo-champions' : ''} ${posiciones.length - index <= 4 ? 'equipo-descenso' : ''}`}>
                            <td>{posicion.posicion}</td>
                            <td className='td-img'><img src={posicion.escudo_url} alt="" /> {posicion.equipo}</td>
                            <td>{posicion.partidos_jugados}</td>
                            <td>{posicion.partidos_ganados}</td>
                            <td>{posicion.partidos_empatados}</td>
                            <td>{posicion.partidos_perdidos}</td>
                            <td className='none'>{posicion.goles_a_favor}</td>
                            <td className='none'>{posicion.goles_en_contra}</td>
                            <td className='none'>+{posicion.diferencia_goles}</td>
                            <td>{posicion.puntos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
