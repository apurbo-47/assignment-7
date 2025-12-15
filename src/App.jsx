
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Bids from './Components/Bids/Bids'
import Footer from './Components/Footer/Footer'
import Heading from './Components/Heading/Heading'
import Navbar from './Components/Navbar/Navbar'



function App() {
  
const [favItem, setFavItem] =  useState([]);

const [totalBid, setTotalBid] = useState(0);
 
const [removeItem, setRemoveItem] = useState([]);

  const handleButtonClick = (bid) => {
      setFavItem([...favItem, bid])
  }

  const handleTotalBids = (total,id) => {
    setTotalBid(totalBid+total);
    handleRemoveItem(id)
  }
  
  const handleRemoveItem = (id)=>{
    const remainingFavItem= favItem.filter((item)=> item.id !== id);
    setRemoveItem(removeItem , remainingFavItem);
  }
  
// console.log(handleRemoveItem);
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Heading></Heading>


 <div className="main-container flex">

<div className='left-container w-[70%]'>
<Bids handleButtonClick={handleButtonClick} handleTotalBids={handleTotalBids}
 handleRemoveItem={handleRemoveItem} ></Bids> 
       </div>

      
       <div className='card  bg-white text-black p-5 mr-5 right-container w-[30%] h-fit'>
        <h1 className='text-center text-3xl font-medium text-[#0E2954] underline-offset-8'>Favourite Items </h1>

        {
          favItem.map((marked) => <h3 className='card  bg-white text-[#0E2954] p-3' key={marked.id}>
            {marked.description} 
           <p> {marked.currentBidPrice}$ 
            Bids:{marked.bidsCount}</p>
            <button className='ml-80 bg-black text-white w-5 h-6 mb-3' onClick={()=> handleRemoveItem()}> X {removeItem}</button>
            </h3>)
        }

        <h3 className='text-2xl mt-5 text-center'>Total Bids Amount: {totalBid}$ </h3>

       </div>

 </div>
      

      <Footer></Footer>


      
      
    </>
  )
}

export default App
