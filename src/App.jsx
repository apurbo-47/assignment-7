import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Bids from "./Components/Bids/Bids";
import Footer from "./Components/Footer/Footer";
import Heading from "./Components/Heading/Heading";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [favItem, setFavItem] = useState([]);
  // console.log(favItem);

  const [totalBid, setTotalBid] = useState(0);
  // const [removeBid, setRemoveBid] = useState(0);

  const handleButtonClick = (bid) => {
    setFavItem([...favItem, bid]);
  };

  const handleTotalBids = (total) => {
    setTotalBid(totalBid + total);
  };
  const handleRemoveMoney = (total) => {
    setTotalBid(totalBid - total);
  };

  const handleRemoveItem = (id) => {
    // const deleteItem = favItem.find((item) => item.id === id);
    const restItems = favItem.filter((item) => item.id !== id);
    setFavItem(restItems);
  };

  // console.log(handleRemoveItem);
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Heading></Heading>

      <div className="main-container flex">
        <div className="left-container w-[70%]">
          <Bids
            handleButtonClick={handleButtonClick}
            handleTotalBids={handleTotalBids}
          ></Bids>
        </div>

        <div className="card  bg-white text-black p-5 mr-5 right-container w-[30%] h-fit">
          <h1 className="text-center text-3xl font-medium text-[#0E2954] underline">
            {" "}
            Favourite Items{" "}
          </h1>

          {favItem.map((marked) => (
            <h3 key={marked.id} className="card  bg-white text-[#0E2954] p-3">
              {marked.description}
              <p>
                {" "}
                {marked.currentBidPrice}$ Bids:{marked.bidsCount}
              </p>

              <button
                className="ml-80 bg-black text-white w-10 h-6 mb-3 cursor-pointer"
                onClick={() => {
                  handleRemoveItem(marked.id);
                  handleRemoveMoney(marked.currentBidPrice);
                }}
              >
                {" "}
                X
              </button>
            </h3>
          ))}

          <h3 className="text-2xl mt-5 text-center">
            Total Bids Amount: {totalBid} $
          </h3>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
