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
  const [chosenPlayer, setChosenPlayer] = useState([])
  console.log(chosenPlayer)
  return (
    <>
      <Navbar availableBalance = {availableBalance}></Navbar>
      <Banner></Banner>
      <div className='max-w-[1320px] mx-auto sora mt-[94px] flex justify-between items-center'>
        <h2 className='text-[1.75rem] font-bold'>{toggle ? "Available Players" : `Selected Players (${chosenPlayer.length}/6)`}</h2>
        <div>
          <button onClick={handleAvailableToggle} className={`btn rounded-r-none border-r-0 ${toggle == true ? "bg-[#e7fe29]" : ""}`}>Available</button>
          <button onClick={handleSelectedToggle} className={`btn rounded-l-none border-l-0 ${toggle == false ? "bg-[#e7fe29]" : ""}`}>Selected <span>({chosenPlayer.length})</span> </button>
        </div>
      </div>
      
      {
        toggle == true ? <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers fetchPlayers = {fetchPlayers} availableBalance = {availableBalance} setAvailableBalance={setAvailableBalance} chosenPlayer = {chosenPlayer} setChosenPlayer={setChosenPlayer}></AvailablePlayers>
      </Suspense> : <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <SelectedPlayers chosenPlayer = {chosenPlayer} setChosenPlayer={setChosenPlayer} availableBalance = {availableBalance} setAvailableBalance={setAvailableBalance}></SelectedPlayers>
      </Suspense>
      }
      
    </>
  )
}

export default App
