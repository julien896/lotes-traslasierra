import React from 'react';
import Image from 'next/image'
import i1 from '@/public/assets/4.jpg'
import logo from '@/public/assets/logo-2.png'

const UsComponent = () => {
    return ( 
        <div className='us-container'>
            <div className='image'>
            <div className="normal" style={{ backgroundImage:`url("/assets/4.jpg")` }} />
            <div className="invert" style={{ backgroundImage:`url("/assets/2.jpg")` }} />
            </div>
            <div className='data'>
                <div className='img'>
                <div className='logo'>
                    <Image src={logo} alt='' />
                </div>
                <span className='title'>Nosotros</span>
                </div>
                <span className='description'>
                Somos un equipo de trabajo consolidado en el valle de Traslasierra hace más de diez años, dispuesto a aprender y a 
                capacitarse día a día en base a las necesidades de nuestros clientes.<br /> 
                Por eso consideramos que podemos brindarles, desde nuestra experiencia, un asesoramiento adecuado a la hora
                de tomar la decisión.
                <br /><br />
                También contamos con asesoramiento técnico a la hora de desarrollar su casa, complejo o cabaña, como así la financiación
                para que puedas llegar a cumplir tu sueño<br /><br />
                No dude en contactarnos. Nuestra oficina se encuentra en el <b style={{ color: 'black' }}>Hotel Coronado de Mina Clavero</b> (Av. San Martín 2300).<br />
                <a href='https://www.coronadosuites.com/'>https://www.coronadosuites.com/</a>
                </span>
            </div>
        </div>
     );
}
 
export default UsComponent;