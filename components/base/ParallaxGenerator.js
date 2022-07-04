import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxGenerator = ({ bgImage, bgImageStyle, title, description }) => {
    return ( 
        <>
        <Parallax 
          bgImageStyle={bgImageStyle} 
          bgImage={bgImage} 
          strength={300}
        >
            <div 
              style={{ 
                  height: 400, 
                  width: 1150,
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  background:'rgba(0, 0, 0, 0.6)' 
              }}
            >
                <div className='title'>{title}</div>
            </div>
        </Parallax>
        <div className='resto-container'>
        <div className='resto-description'>
            <div className='description'>{description}</div>
        </div>
        </div>
        </>
     );
}
 
export default ParallaxGenerator;