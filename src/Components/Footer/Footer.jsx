import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center rounded  bg-white text-black mt-32">

     <h4 className='text-2xl text-[#003EA4] inline pt-20'>Auction <span className='text-[#FFD337]'>Gallery</span></h4>   
      <nav className="grid grid-flow-col gap-4 ">
     <p>Bid.</p>
     <p>Win.</p>
     <p>Own.</p>
  </nav>  
  <nav className="grid grid-flow-col gap-8">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auction</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
  </nav>
 
  <aside>
    <p className='pb-20'> © {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;