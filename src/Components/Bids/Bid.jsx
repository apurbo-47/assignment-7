import React from 'react';



const Bid = ({bid}) => {
    console.log (bid);
    return (
        <div className='ml-32 mr-10'>
           <div className="card  bg-white text-black ">
  <div className="card-body grid grid-flow-col">
    <img className='w-10 h-10' src={bid.image} alt="" />
    <h2 className='text-[#0E2954]'> {bid.description}</h2>
      <p>{bid.currentBidPrice}</p> 
      <p>{bid.timeLeft}</p>  
      
  </div>
</div>
           
        </div>
    );
};

export default Bid;