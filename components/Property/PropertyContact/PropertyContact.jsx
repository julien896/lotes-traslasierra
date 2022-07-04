import React from 'react';
import Image from 'next/image'
import { Button } from 'antd';

import logo from '@/public/assets/isotipo.jpg'


const PropertyContact = () => {
    return ( 
        <div className='property-contact-container'>
            <div className='logo'>
              <Image src={logo} alt='' />
              <div className='title'>Lotes Traslasierra</div>
            </div>
            <div className='btn-wrapper'>
                <Button style={{ marginLeft: 15 }}>Whatsapp</Button>
                <Button>Quiero que me llamen</Button>
            </div>
        </div>
     );
}
 
export default PropertyContact;