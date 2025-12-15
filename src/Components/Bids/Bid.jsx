import React from 'react';
import { FaRegHeart } from "react-icons/fa";



const Bid = ({bid, handleButtonClick, handleTotalBids, handleRemoveItem}) => {
    // console.log (bid);
    return (
      <div>
         <div className='ml-10 mr-10 w-[70%]'>

           <div className="card bg-white text-black">
  <div className="card-body flex flex-row ">
    <img className='w-12 h-12' src={bid.image} alt="" />
    <h2 className='text-[#0E2954] w-40'> {bid.description}</h2>
      <p className='ml-10 '>{bid.currentBidPrice}</p> 
      <p className='ml-5 '>{bid.timeLeft}</p>  
      <button className='mr-24' onClick={() => {
        handleButtonClick(bid),
        handleTotalBids(bid.currentBidPrice),
        handleRemoveItem(bid.id)
      } }>
         <FaRegHeart />
      </button>
  </div>
</div>

        </div>

      </div>
      

     

    );
};

export default Bid;