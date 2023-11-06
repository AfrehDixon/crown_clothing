import React from 'react';
import './menystyles.scss';
import { Link } from 'react-router-dom';
// 


const  MenuItem=({title,imageUrl,size,linkUrl,match}) => {
  return (
      <div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}} onClick={()=>Link(`${match.url}${linkUrl}`)}>
                
      <div className='content'>
              <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
                
      </div>
        </div>  
    
  )
}

export default MenuItem;


