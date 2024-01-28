import React from 'react';
import './card.css'

const Card=({
    className,
    children
})=>{
    return <div className={className}>{children}</div>

}
export default Card;