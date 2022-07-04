import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWifi,
  faCheck,
  faCar,
  faBed,
  faBellConcierge,
  faUtensils,
  faBath
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    return ( 
        <div className='services-container'>
        <div className='service'>
            <div>
                <span className='title'>Internet</span>
                <FontAwesomeIcon icon={faWifi} /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Wi Fi</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Habitaciones</span>
                <FontAwesomeIcon icon={faBed} /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Aire acondicionado</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Servicios</span>
                <FontAwesomeIcon icon={faBellConcierge} /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Servicio de lavanderia completo</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Estacionamiento y transporte</span>
                <FontAwesomeIcon icon={faCar} /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Estacionamiento</span>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Comidas y bebidas</span>
                <FontAwesomeIcon icon={faUtensils} /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Restaurante</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Bar</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Servicio de mesa</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Desayuno tipo bufé</span>
            </div>
            </div>
        </div>
        <div className='service'>
            <div>
                <span className='title'>Baños</span>
                <FontAwesomeIcon icon={faBath} /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Baño privado</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Bañera en algunas habitaciones</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <FontAwesomeIcon icon={faCheck} /> 
                <span className='item'>Ducha</span>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default Services;