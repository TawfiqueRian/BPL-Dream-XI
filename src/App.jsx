import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'

function App() {

  const fetchPlayers = fetch('/Players.json')
  .then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers fetchPlayers = {fetchPlayers}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
