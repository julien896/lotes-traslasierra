import React from 'react';
import { Button } from 'antd';
import Link from 'next/link'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image'


const RoomsCard = () => {
    return ( 
        <div className='rooms-container'>
            <div className='text'>
                <h2>Nuestras habitaciones</h2>
                <Button><Link href="/rooms">Ver Detalles</Link></Button>
            </div>
            <div className='carousel'>
            </div>
        </div>
     );
}
 
export default RoomsCard;