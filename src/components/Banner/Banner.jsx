import React from 'react';
import bannerPic from '../../assets/bg-shadow.png'
import bannerMain from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="max-w-330 mx-auto sora text-center flex items-center justify-center mt-[24px] bg-cover bg-center rounded-[24px] bg-[#131313]" style={{
            backgroundImage: `url(${bannerPic})`
        }}>
            <div className='max-w-[970px] max-auto'>
                <img className='max-w-[248px] mx-auto mt-[64px]' src={bannerMain} alt="Banner Main" />
                <h2 className='text-[2.5rem] text-white font-bold my-[20px]'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-[1.5rem] text-[#ffffffb3] mb-[20px]'>Beyond Boundaries Beyond Limits</p>
                <button className='btn font-bold bg-[#E7FE29] rounded-xl outline-2 outline-solid outline-[#E7FE29] outline-offset-4 mb-[64px]'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;