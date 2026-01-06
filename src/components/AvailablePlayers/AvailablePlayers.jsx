import React, { use } from 'react';
// import logo from '../../assets/logo-footer.png'

import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({fetchPlayers, availableBalance, setAvailableBalance, chosenPlayer, setChosenPlayer}) => {
    const playerData = use(fetchPlayers)
    // console.log(playerData)
    return (
        <div className='max-w-330 mx-auto sora grid grid-cols-3 gap-[24px] mt-[32px]'>
            {
                playerData.map(player => <PlayerCard key={player.id} player = {player} availableBalance = {availableBalance} setAvailableBalance={setAvailableBalance} chosenPlayer={chosenPlayer} setChosenPlayer={setChosenPlayer}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;