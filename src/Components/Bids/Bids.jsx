import React, { useEffect, useState } from 'react';

const Bids = () => {

    const [bids, setBids] = useState ([])

    useEffect (() => {
        fetch('bids.json')
        .then(res => res.json())
        .then (data => setBids (data))
    },[])
    console.log (bids);

    return (
        <div>
            
        </div>
    );
};

export default Bids;