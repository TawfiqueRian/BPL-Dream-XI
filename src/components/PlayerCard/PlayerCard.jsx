import React, { useState } from 'react';
import countryFlag from '../../assets/flag.png'
import userIcon from '../../assets/user_1.png'


const PlayerCard = ({player, availableBalance, setAvailableBalance, chosenPlayer, setChosenPlayer}) => {
    const [chooseBtn, setChooseBtn] = useState(false)
    const handleChooseBtn = (player) => {
        if(availableBalance < player.priceUSD)
        {
            alert("Insufficient Coins!!")
            return
        }
            setChooseBtn(true)
            const newBalance = availableBalance - player.priceUSD
            setAvailableBalance(newBalance);
            setChosenPlayer([...chosenPlayer,player])
    }
    return (
        <div className="card p-[24px] border-1 border-[#1313131a] max-w-[424px]">
                <div className='flex justify-center items-center'>
                    <img className='w-full rounded-xl max-h-[240px]' src={player.image} alt="" />
                </div>
                <div className='flex items-center gap-1 my-[16px]'>
                    <img className='w-[20px] h[20px]' src={userIcon} alt="" />
                    <span className='font-semibold text-[1.25rem]'> {player.name}</span>
                </div>
                <div className='flex justify-between items-center border-b border-b-[#1313131a] pb-[16px]'>
                    <div className='flex items-center gap-1'>
                        <img className='w-[20px] h-[20px]' src={countryFlag} alt="" />
                        <p className='text-[1rem] text-[#1313131]'>{player.country}</p>
                    </div>
                    <button className="btn">{player.role}</button>
                </div>
                <div className='flex justify-between items-center my-[16px]'>
                    <p className="font-bold text-base text-[#1313131]">Rating</p>
                    <span className='text-base text-[#131313b3]'>{player.rating}</span>
                </div>
                <div className='flex justify-between items-center mb-[16px]'>
                    <span className='font-bold text-base text-[#1313131]'>{player.battingHand}</span>
                    <span className='text-base text-[#131313b3]'>{player.bowlingHand}</span>
                </div>
                <div className='flex justify-between items-center '>
                    <p className='font-bold text-base text-[#1313131]'>Price: ${player.priceUSD}</p>
                    <button disabled={chooseBtn} onClick={() => handleChooseBtn(player)} className='btn'>{chooseBtn == true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
    );
};

export default PlayerCard;