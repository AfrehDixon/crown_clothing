import React from 'react';
import './menystyles.scss';
import { withRouter } from 'react-router-dom';



const  MenuItem=({title,imageUrl,size,linkUrl,match,history}) => {
  return (
      <div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                
      <div className='content'>
              <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
                
      </div>
        </div>  
    
  )
}

export default (MenuItem);


