import React from 'react';
import ParallaxGenerator from '@/components/base/ParallaxGenerator';

const RoomsPresentation = () => {
    return ( 
        <>
        <ParallaxGenerator 
            bgImageStyle={{maxHeight: '705px', maxWidth: '1150px'}} 
            bgImage="https://i.ibb.co/c112Zpq/Whats-App-Image-2022-04-29-at-6-42-56-PM.jpg"
            title="Nuestras Habitaciones"
            description="Nuestras habitaciones han sido pensadas para que su estadía sea confortable y placentera."
        />

        </>
     );
}
 
export default RoomsPresentation;