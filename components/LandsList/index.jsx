import React from 'react';
import Filters from './Filters/Filters';
import List from './List/List';


const LandsList = () => {
    return ( 
        <div className='lands-container'>
            <Filters />
            <List />
        </div>
     );
}
 
export default LandsList;