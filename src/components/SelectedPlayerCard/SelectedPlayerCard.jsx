import React from 'react';

const SelectedPlayerCard = ({player, chosenPlayer, setChosenPlayer,availableBalance, setAvailableBalance}) => {
    const handleRemove = (p) => {
        setChosenPlayer(chosenPlayer.filter(player => player.id != p.id))
        setAvailableBalance(availableBalance + p.priceUSD)
    }
    return (
        <div className='max-w-330 mx-auto sora'>
            <div className='flex justify-between items-center p-[24px] mt-[32px] border-1 border-[#1313131a] rounded-2xl'>
                <div className='flex items-center justify-center gap-3'>
                    <img className='w-[80px] h-[80px] rounded-2xl' src={player.image} alt="" />
                    <div>
                        <h2 className='font-semibold text-[#131313] text-[1.5rem]'>{player.name}</h2>
                        <p className='text-[#13131399] text-base'>{player.role}</p>
                    </div>
                </div>
                <img onClick={() => handleRemove(player)} src="https://i.ibb.co.com/ksVWXn6K/Frame-4.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedPlayerCard;