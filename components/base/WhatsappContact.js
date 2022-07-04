import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { WhatsAppOutlined } from '@ant-design/icons';


const WhatsappContact = () => {
    
    const [whatsappActive, setWhatsappActive] = useState(false)

    const changeWhatsapp = () => {
      window.scrollY >= 250 ? setWhatsappActive(true) : setWhatsappActive(false)
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeWhatsapp)
    }, []);

    return ( 
        whatsappActive ?
            <Link
              className="font-size-14 kit__utils__link"
              href="https://api.whatsapp.com/send?phone=5493465449481&text=&source=&data"
            >
            <a target="_blank" rel="noopener noreferrer">
            <WhatsAppOutlined 
/*                 style={{ 
                    color: 'white', 
                    background: 'rgba(37, 211, 102, 0.8)',
                    borderRadius: '50%',
                    position: 'fixed', 
                    fontSize: 80, 
                    left: '90%',
                    top: '80%',
                    zIndex: 30,
                    transition: '1s ease' 
                }} */
            />
            </a>
            </Link> 
        : null
     );
}
 
export default WhatsappContact;