import React from 'react';
import BlurFade from '../magicui/blur-fade';

const RecentsCards = () => {
  const cards = [
    {
      title: 'CSE Department: Introduction to Algorithms Assigned',
      value: 'August 6, 2024',
      details: 'The subject "Introduction to Algorithms" has been assigned to Prof. John Smith for the CSE department.',
      status: 'Assigned',
      tasks: 'Subject assigned',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      bgColor: 'bg-green-400',
    },
    {
      title: 'IT Department: Database Management Systems Assigned',
      value: 'August 4, 2024',
      details: 'The subject "Database Management Systems" has been assigned to Dr. Alice Johnson for the IT department.',
      status: 'Assigned',
      tasks: 'Subject assigned',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'EEE Department: Electrical Circuits Lab Scheduled',
      value: 'July 31, 2024',
      details: 'The "Electrical Circuits Lab" has been scheduled for the EEE department under Prof. Raj Patel.',
      status: 'Scheduled',
      tasks: 'Lab scheduled',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      bgColor: 'bg-purple-500',
    },
  ];
  
  return (
      <BlurFade delay={0.8} inView>
    <div className="antialiased font-sans flex mr-50" style={{marginRight:"100px"}}>
      <div className="mr-5 mt-8">
        {/* Title */}
        <h2 className="text-custom-color  font-medium">RECENT ACTIVITY</h2>
        <div className="m-8 space-y-6" style={{ maxWidth: '700px' }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ width: '800px' }}  // Set the card width here
              className={`pl-1 h-20 ${card.bgColor} rounded-lg shadow-md`}
            >
              <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between items-center">
                <div className="my-auto">
                  <p className="font-bold">{card.title}</p>
                  <p className="text-lg">{card.value}</p>
                </div>
                <div className="my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={card.iconPath}
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </BlurFade>
  );
};

export default RecentsCards;
