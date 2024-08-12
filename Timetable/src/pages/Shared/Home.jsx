import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagesvg from '@/assets/images/Research.svg';
// import '@/assets/css/Home.css';
// import BoxReveal from '@/components/magicui/box-reveal';
// import About from '@/pages/Shared/About';
import Footer from '@/pages/Shared/Footer';
import Waves from '@/components/ui/Waves';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <div className='home-img' style={{ height: '570px', width: '700px' }}>
          <img src={imagesvg} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div
          className='card'
          style={{
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(1, 1, 1, 0.5)',
            padding: '40px',
            width: '500px',
            backgroundColor: '#ffffff'
          }}
        >
          <h2 style={{ margin: '0 0 10px 0', fontSize: '2.5rem', color: '#333333' }}>Optimize Your Scheduling</h2>
          <p style={{ margin: '0 0 10px 0', color: '#555555' }}>
            Simplify your timetable management with our advanced generation tool. Automatically generate, organize,
            and manage your schedules with ease.
          </p>
          <button
            onClick={handleStartClick} // Add onClick handler
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Start
          </button>
        </div>

        <div>
          <Waves />
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
