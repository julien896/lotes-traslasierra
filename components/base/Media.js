import React from 'react';
import { 
    FacebookFilled, 
    InstagramFilled, 
    MailFilled 
  } from '@ant-design/icons';

const Media = () => {
    return ( 
    <div className='media'>
      <FacebookFilled />
      <a href='https://www.instagram.com/traslasierra.lotes.info/' target="_blank" rel="noopener noreferrer">      
        <InstagramFilled />
      </a>
      <MailFilled />
    </div>
     );
}
 
export default Media;