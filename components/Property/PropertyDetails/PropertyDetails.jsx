import React from 'react';

const PropertyDetails = ({ property }) => {
    return ( 
        <div className='details-container'>
            <div className='img' style={{ backgroundImage: `url(${property?.img})`}} />
            <div className='first-details'>
                <div className='left'>
                    <span className='title'>
                        {property?.name}
                    </span>
                    <span className='street'>
                        {property?.street}
                    </span>
                </div>
                <div className='right'>
                    {property?.price}
                </div>
            </div>
            <hr />
            <div className='description-container'>
                <span>Descripción</span>
                <div className='description'>
                    {property?.descriptionFull}
                </div>
            </div>
            <hr />
            <div className='placed-container'>
                <span>Ubicación</span>
                <div className='placed'>{property?.street}</div>
            </div>
        </div>
     );
}
 
export default PropertyDetails;