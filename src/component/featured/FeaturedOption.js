import React from 'react';
import './Featured.css';

function FeaturedOption({title,Icon,resultAmount,color}) {
  return (
    <div className='item'>
        <div className='itemTitle'>{title}</div>
        <div className={`itemResult`} style={{color: `${color}`}}>
            <a style={{fontSize: "small"}}>{Icon}</a>
            <div className="resultAmount">{resultAmount}</div>
        </div>
    </div>
  )
}

export default FeaturedOption