import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-[580px] mb-32"
  style={{
    backgroundImage:
      "url(Banner-min.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="mr-60">
    <div className="max-w-2xl mr-60">
      <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 font-light text-2xl">
        Discover rare collectibles, luxury goods, and vintage <br></br> treasures in our curated auctions
      </p>
      <button className="btn bg-white text-black w-[140px] rounded-full ">Explore Auction</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;