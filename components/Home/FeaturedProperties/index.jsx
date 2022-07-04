import React from 'react';
import Properties from './Properties/Properties';
import PropertiesTitle from './Title/PropertiesTitle';

const FeaturedProperties = () => {
    return ( 
        <div className='properties-container'>
            <PropertiesTitle />
            <Properties />
        </div>
     );
}
 
export default FeaturedProperties;