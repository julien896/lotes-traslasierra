import React, { useState } from 'react';
import Filters from './Filters/Filters';
import List from './List/List';
import { data } from '@/utils/fake'


const LandsList = () => {
    const [filteredData, setFilteredData] = useState(data())
    return ( 
        <div className='lands-container'>
            <Filters filteredData={filteredData} setFilteredData={setFilteredData} />
            <List filteredData={filteredData} />
        </div>
     );
}
 
export default LandsList;