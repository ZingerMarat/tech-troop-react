import React from 'react';

function Landing({data}) {

    const hottest = data.store.find(item => item.hottest === true)

    return ( 
        <>
        <div>Welcome, {data.user}. The hottest item is {hottest.item} for ${hottest.price}</div>
        </>
    );
}

export default Landing;