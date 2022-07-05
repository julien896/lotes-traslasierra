import React from 'react';
import Link from 'next/link';

const List = ({ filteredData }) => {
    return ( 
        <div className='list-container'>
          <div className='info'>
            <h2 className='title'>Terrenos en Traslasierra</h2>
            <span className='description'>
            Si estas buscando terrenos en venta en Traslasierra, desde Lotes Traslasierra te permitimos filtrar datos sobre 
            localidades para que hagas una búsqueda personalizada. <br />Entre las opciones disponibles vas a 
            encontrar terrenos en barrios privados, 
            semi-privados, puertas a la calle, y muchas otras variantes de terrenos y lotes.
            </span>
          </div>
          <div className='list'>
            {filteredData.map(item => (
              <Link href={`/propiedades/${item.id}`} passHref key={item.id}>
                <div className='card' key={item.id}>
                    <div className='img' style={{ backgroundImage: `url(${item.img})`}} />
                    <div className='details'>
                      <div className='first'>
                        <div className='name'>{item.name}</div>
                        <div className='description'>{item.description}</div>
                      </div>  
                      <div className='second'>
                        <div className='price'>{item.price}</div>
                        <span className='see'>Detalles</span>
                        <div className='meters'>{item.squareMeters}</div>
                      </div>  
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
     );
}
 
export default List;