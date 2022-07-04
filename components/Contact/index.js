import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import ContactForm from './Form/Form';
import GMap from './Map/Map'

const Contact = () => {
    return ( 
        <>
          <hr />
          <div className='contact-container'>
            <ContactUs />
            {/* <GMap /> */}
            <ContactForm />
          </div>
        </>
     );
}
 
export default Contact;