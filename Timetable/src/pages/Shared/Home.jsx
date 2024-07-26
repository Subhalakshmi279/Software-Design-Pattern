import React from 'react'
import imagesvg from '@/assets/images/home-2.svg';
// import '@/assets/css/Home.css';

const Home = () => {
    return (
        <>
        <div className='home-img'>
            <img src={imagesvg} alt="image" />
        </div>

            {/* animated text */}
{/*             
            <div className="relative w-full home">
      <h3 id="resizing-h3" className="absolute text-left text-[74px] text-[#009393] ml-[15%] font-bold">
        <span>
          <div className="stage mx-auto mt-4 h-[100px]">
            <div className="cubespinner animate-spincube">
              <div className="face1 text-[#f1c40f]">Innovative</div>
              <div className="face2 text-white">Creative</div>
              <div className="face3 text-[#f85555]">Unbeatable</div>
              <div className="face4 text-white">Exceptional</div>
            </div>
          </div>
        </span>
      </h3>
    </div> */}
            </>
    )
}

export default Home