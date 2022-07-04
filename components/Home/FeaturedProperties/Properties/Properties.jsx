import React from 'react';
import { data } from '@/utils/fake'
import Link from 'next/link';

const FeaturedProperties = () => {
    const filteredData = data().filter(el => el.featured)

    return ( 
      <>
        <div className='properties'>
            {filteredData?.map(item => (
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
      </>
     );
}
 
export default FeaturedProperties;