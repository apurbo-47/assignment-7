
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Bids from './Components/Bids/Bids'
import Footer from './Components/Footer/Footer'
import Heading from './Components/Heading/Heading'
import Navbar from './Components/Navbar/Navbar'



function App() {
  
const [favItem, setFavItem] =  useState([])

  const handleButtonClick = (bid) => {
      setFavItem([...favItem, bid])
  }

  console.log (favItem);
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Heading></Heading>


 <div className="main-container flex">

<div className='left-container w-[70%]'>
<Bids handleButtonClick={handleButtonClick}></Bids> 
       </div>

      
       <div className='card  bg-white text-black p-5 mr-5 right-container w-[30%] h-fit'>
        <h1 className='text-center text-3xl font-medium text-[#0E2954] underline-offset-8'>Favourite Items </h1>

        {
          favItem.map((marked) => <h3 className='card  bg-white text-[#0E2954] p-3' key={marked.id}>
            <h4>{marked.description}</h4> 
           <p> {marked.currentBidPrice}$ 
            Bids:{marked.bidsCount}</p>
            </h3>)
        }

        <h3 className='text-2xl mt-5 text-center'>Total Bids Amount: 0 </h3>

       </div>

 </div>
      

      <Footer></Footer>


      
      
    </>
  )
}

export default App
