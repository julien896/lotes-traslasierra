import React from 'react';
import WhatsappContact from '../base/WhatsappContact';
import Rooms from './Rooms/Rooms';
import RoomsPresentation from './RoomsPresentation';
import Services from './Services/Services';


const Resto = () => {
    return ( 
        <div>
            <WhatsappContact />
            <RoomsPresentation />
            <Rooms />
            <Services /> 
        </div>
     );
}
 
export default Resto;