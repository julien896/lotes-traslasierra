import React from 'react';
import PropertyContact from './PropertyContact/PropertyContact';
import PropertyDetails from './PropertyDetails/PropertyDetails';

const Property = ({ property }) => {
    return ( 
        <>
            <div className='property-container'>
                <PropertyDetails property={property} />
                <PropertyContact />
            </div>
        </>
     );
}
 
export default Property;