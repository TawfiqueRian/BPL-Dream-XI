import React from 'react';
import logoNav from '../../assets/logo.png'
import navCoin from '../../assets/dollar 1.png'
const Navbar = () => {
    return (
        <div className="navbar max-w-[1320px] mx-auto flex items-center justify-between sora">
        <div className="w-[72px] h-[72px]">
          <img src={logoNav} alt="logo" />
        </div>
        <div className="flex gap-[48px] items-center">
          <ul className='list-none flex gap-[48px] text-[#131313b3]'>
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Schedules</a></li>
          </ul>
          <div>
            <button className='btn flex gap-2 bg-white'><span>0 Coin</span>
              <span><img src={navCoin} alt="" /></span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;