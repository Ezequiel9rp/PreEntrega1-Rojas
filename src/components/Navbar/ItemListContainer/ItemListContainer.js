import React from 'react';
import './ItemListContainer.css';

export const ItemListContainer = (props) => {
    const {greeting} = props;
  return (
    <h2> 
        {greeting}
    </h2>
  )
}
