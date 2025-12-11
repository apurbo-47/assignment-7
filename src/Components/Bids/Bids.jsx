import React, { useEffect, useState } from 'react';
import Bid from './Bid';

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
             <div className="all-blogs grid grid-cols-2">
                {
                    bids.map((bid) => (
                    <Bid key={bid.id} bid={bid} ></Bid>
                ))
                }
              </div>
        </div>
    );
};

export default Bids;