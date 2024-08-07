import React from 'react';
import imagesvg from '@/assets/images/tt-transformed.jpeg';
// import '@/assets/css/Home.css';
import BoxReveal from '@/components/magicui/box-reveal';
import About from '@/pages/Shared/About';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <div className='home-container' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='home-text' style={{ width: '50%', paddingLeft: '20px' }}>
                    <BoxReveal
                        width="100%"
                        boxColor="#5D8AA8"
                        duration={0.75}
                    >
                        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
                            Effortless Timetable Generation for Optimal Scheduling
                        </h1>
                    </BoxReveal>
                </div>
                <div className='home-img'>
                    <img src={imagesvg} alt="image"  />
                </div>
                
            </div>
                <About/>
                <Footer/>
                
        </>
    );
}

export default Home;
