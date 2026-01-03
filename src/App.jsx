import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'

function App() {

  const fetchPlayers = fetch('/Players.json')
  .then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='max-w-[1320px] mx-auto sora mt-[94px] flex justify-between items-center'>
        <h2 className='text-[1.75rem] font-bold'>Available Players</h2>
        <div>
          <button className='btn bg-[#E7FE29]'>Available</button>
          <button className='btn'>Selected <span>(0)</span> </button>
        </div>
      </div>
      <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers fetchPlayers = {fetchPlayers}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
