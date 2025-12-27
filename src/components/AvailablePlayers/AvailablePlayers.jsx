import React, { use } from 'react';

const AvailablePlayers = ({fetchPlayers}) => {
    const playerData = use(fetchPlayers)
    console.log(playerData)
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlayers;