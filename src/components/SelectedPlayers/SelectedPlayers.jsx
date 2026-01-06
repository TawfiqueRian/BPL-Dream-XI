import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({chosenPlayer, setChosenPlayer, availableBalance, setAvailableBalance}) => {
    // console.log(chosenPlayer)
    return (
        <div className='max-w-330 mx-auto sora'>
            {
                chosenPlayer.map(player => <SelectedPlayerCard player = {player} chosenPlayer={chosenPlayer} setChosenPlayer={setChosenPlayer} availableBalance = {availableBalance} setAvailableBalance = {setAvailableBalance}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;