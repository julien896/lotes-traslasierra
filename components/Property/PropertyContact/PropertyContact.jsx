import React from 'react';
import Image from 'next/image'
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

import logo from '@/public/assets/isotipo.jpg'
import PropertyForm from './Form/Form';

const PropertyContact = () => {
    return ( 
        <div className='property-contact-container'>
            <div className='logo'>
              <Image src={logo} alt='' />
              <div className='title'>Lotes Traslasierra</div>
            </div>
            <div className='btn-wrapper'>
                <Button>
                <a 
                  href='https://api.whatsapp.com/send?phone=5493544306083&text=&source=&data'
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <span>Whatsapp</span>
                    <WhatsAppOutlined 
                      style={{ 
                        color: "#ECEBF3", 
                        margin: 0,
                        marginLeft: 5
                      }} 
                    />
                </a>
                </Button>
                <Button>Quiero que me llamen</Button>
            </div>
            <PropertyForm />
        </div>
     );
}
 
export default PropertyContact;