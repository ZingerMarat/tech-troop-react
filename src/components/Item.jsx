import React from 'react';


function Item({data, discount}) {
    return (  
        <>
        <div>{data.item} : ${discount ? data.price * (1-data.discount) : data.price}</div>
        </>
    );
}

export default Item;