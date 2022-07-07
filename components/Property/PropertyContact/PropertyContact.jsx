import React, { useState } from 'react';
import Image from 'next/image'
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

import logo from '@/public/assets/isotipo.jpg'
import PropertyForm from './Form/Form';
import CallModal from './Modal/Modal';

const PropertyContact = () => {
    const [modal, setModal] = useState(false)

    function showModal() {
      setModal(!modal)
    }

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
                <Button onClick={() => showModal()}>Quiero que me llamen</Button>
            </div>
            <CallModal modal={modal} showModal={showModal} />
            <PropertyForm />
        </div>
     );
}
 
export default PropertyContact;