import React from 'react';
import Image from 'next/image'


const PresentationCard = () => {
    return ( 
        <div className='presentation-container'>
            <div className='text'> 
                <div className='hotel'>Encontrá tu lugar</div>
                <div className='description'>
                    Brindamos soluciones y asesoria inmobiliaria. <br/>
                    Deseamos que tus sueños se hagan realidad.
                </div>
            </div>
        </div>
     );
}
 
export default PresentationCard;