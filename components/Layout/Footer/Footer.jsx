import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/isotipo.jpg'
import { 
  FacebookFilled, 
  InstagramFilled, 
  WhatsAppOutlined 
} from '@ant-design/icons';
import { Button } from 'antd';

const Footer = () => {
  const scrollToContact = () => {
    const section = document.getElementById( 'contact-description' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
    return ( 
        <div className="footer">
             <div className='icons'>
                <Link href='https://www.facebook.com/Coronado-Hotel-Mina-Clavero-103042262369478'>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <FacebookFilled 
                      style={{ color: "#ECEBF3", marginRight: 25 }} 
                    />
                </a>
                </Link>
                <a 
                  href='https://api.whatsapp.com/send?phone=5493544306083&text=&source=&data'
                  target="_blank" 
                   rel="noopener noreferrer"
                >
                    <WhatsAppOutlined 
                      style={{ color: "#ECEBF3", margin: 0 }}  
                    />
                </a>
                <a 
                  href='https://www.instagram.com/traslasierra.lotes.info/'
                  target="_blank" 
                   rel="noopener noreferrer"
                >
                    <InstagramFilled 
                      style={{ color: "#ECEBF3", marginLeft:25 }}  
                    />
                </a>
            </div>            
            <div className='bottom'>
                <div className='bottom-left'>
                    <Link href="/" passHref>
                      <Image src={logo} alt='' />
                    </Link>
                    <div className='contact' style={{ marginLeft: 20 }}>
                        <h3 className='title-bottom'>Av. San Martín 2300</h3>
                        <span className='data-bottom'>Mina Clavero, Cordoba</span>
                    </div>
                </div>
                <div className='bottom-right'>
                <div className="nav">
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/propiedades"
                    >
                    Buscar
                    </Link>
                    <Link
                      className="font-size-14 kit__utils__link"
                      href="/nosotros"
                    >
                    ¿Quiénes Somos?
                    </Link>
                    <Button
                      className="font-size-14 kit__utils__link"
                      onClick={() => scrollToContact()}
                    >
                      Contacto
                    </Button>
                </div>
                </div>
            </div>
            <div className='guide'>
              <div className='description'>
              Todas las medidas enunciadas en los inmuebles ofrecidos <strong>son meramente orientativas</strong>, las medidas exactas serán las que se expresen en el respectivo título de propiedad de cada inmueble.<br />
              <br />              
              Asimismo todas las fotos, imágenes y videos <strong>son meramente ilustrativos y no contractuales</strong>.<br />
              <br />
              Los valores de los inmuebles enunciados <strong>son meramente orientativos y no contractuales</strong>.<br />
              </div>
              <div className='copyright'>
                  <span>© Copyright Lotes Traslasierra. Todos los derechos reservados.</span>
              </div>
            </div>
        </div>
     );
}
 
export default Footer;