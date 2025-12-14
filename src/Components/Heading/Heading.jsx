import React from 'react';

const Heading = () => {
    return (
        <div className='ml-10 mr-10'>
             <h2 className='text-[#0E2954] text-3xl font-semibold mb-5'>Active Auctions</h2>
            <p className='text-black text-xl font-normal mb-8'>Discover and bid on extraordinary items</p>

            <div className="card  bg-white text-black w-[51.4%]">
  <div className="card-body grid grid-flow-col">
    <h4 className="card-title">Items</h4>
    <div className='flex flex-row '>
        <p>Current Bid</p>
    <p>Time Left</p>
    <p>Bid Now</p>
    </div>
    
  </div>

</div>

        </div>
        
    );
};

export default Heading;