import React from 'react';
import MainTopBar from '@/components/Layout/TopBar/TopBar';
import AwesomeSlider from 'react-awesome-slider';
import Image from 'next/image'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Media from '@/components/base/Media';
import ScrollUp from '@/components/base/ScrollUp';

const HomeCard = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return ( 
        <>
        <div className="home-card">
          <div className="container">
            <MainTopBar />
            <AutoplaySlider 
              play={true} 
              cancelOnInteraction={false}
              interval={6000}
            >
              <div 
                style={{ 
                  backgroundImage:`url("/assets/1.jpg")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className='text'>
                Nuestro objetivo es brindarle a nuestros clientes la mejor
                atención y el más adecuado asesoramiento.
                </div>
              </div>
              <div 
                style={{ 
                  backgroundImage:`url("/assets/2.jpg")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className='text'>
                Contamos con más de 10 años de experiencia satisfaciendo las necesidades de nuestros clientes.
                </div>
              </div>
              <div 
                style={{ 
                  backgroundImage:`url("/assets/3.jpg")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className='text'>
                Durante estos años, nos dedicamos como equipo a conocer la zona y la cultura serrana, para brindar asesoramiento
                en la compra de lotes, viviendas y campos.
                </div>
              </div>
            </AutoplaySlider>
            <Media />
            <ScrollUp />
          </div>
        </div>
        </>
     );
}
 
export default HomeCard;