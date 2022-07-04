import React from 'react';
import Image from 'next/image'


const FoodsCard = () => {
    return ( 
        <div className='foods-container'>
            <div className='text'>
                <div className='us'><p>NUESTRA COCINA</p></div>
                <div className='hotel'>Casera y tradicional</div>
                <div className='description'>
                    La experiencia que ofrecemos a nuestros comensales es integramente elaborada<br/>
                    en nuestra cocina de forma casera con ingredientes autóctonos, favoreciendo<br/>
                    a los productores locales y enalteciendo los sabores.
                </div>
            </div>
        </div>
     );
}
 
export default FoodsCard;