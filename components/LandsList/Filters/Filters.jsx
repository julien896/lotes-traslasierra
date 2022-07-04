import React from 'react';
import { Select } from 'antd';

const Filters = () => {
    const { Option } = Select;

    const handlePriceChange = (value) => {
        console.log(`selected ${value}`);
    };
    const handlePlaceChange = (value) => {
        console.log(`selected ${value}`);
    };
    return ( 
        <div className='filters-container'>
            <h2 className='title'>Encontra tu lugar</h2>
            <div className='filters'>
            <div className='orderBy'>
            <span className='tag'>Ordenar por:</span>
            <Select defaultValue="Mas recientes" onChange={handlePriceChange}>
                <Option value="Mas recientes">Mas recientes</Option>
                <Option value="Mayor precio">Mayor precio</Option>
                <Option value="Menor precio">Menor precio</Option>
            </Select>
            </div>
            <div className='place'>
            <span className='tag'>Ubicacion:</span>
            <Select defaultValue="" onChange={handlePlaceChange}>
                <Option value="Mina Clavero">Mina Clavero</Option>
                <Option value="Cura Brochero">Cura Brochero</Option>
                <Option value="Arroyo de los Patos">Arroyo de los Patos</Option>
            </Select>
            </div>
            </div>
        </div>
     );
}
 
export default Filters;