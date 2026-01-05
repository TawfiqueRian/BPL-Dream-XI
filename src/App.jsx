import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = fetch('/Players.json')
  .then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true)
  const handleAvailableToggle = () => {
    setToggle(true)
  }
  const handleSelectedToggle = () => {
    setToggle(false)
  }

  const [availableBalance, setAvailableBalance] = useState(60000000)

  return (
    <>
      <Navbar availableBalance = {availableBalance}></Navbar>
      <Banner></Banner>
      <div className='max-w-[1320px] mx-auto sora mt-[94px] flex justify-between items-center'>
        <h2 className='text-[1.75rem] font-bold'>Available Players</h2>
        <div>
          <button onClick={handleAvailableToggle} className={`btn rounded-r-none border-r-0 ${toggle == true ? "bg-[#e7fe29]" : ""}`}>Available</button>
          <button onClick={handleSelectedToggle} className={`btn rounded-l-none border-l-0 ${toggle == false ? "bg-[#e7fe29]" : ""}`}>Selected <span>(0)</span> </button>
        </div>
      </div>
      
      {
        toggle == true ? <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers fetchPlayers = {fetchPlayers} availableBalance = {availableBalance} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
      </Suspense> : <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <SelectedPlayers></SelectedPlayers>
      </Suspense>
      }
      
      
      

      
    </>
  )
}

export default App
