import React from 'react';
const VideoPlayer = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#bad6b8', minHeight: '65vh' }}>
        
        <h1 className=" font-semibold text-center text-4xl lg:mt-20 mt-20 mb-10">
        Our Beautiful Ooty Hidden Valley Camp</h1>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/AfoFwEiwIzg?si=lnow5jLbygIxEFwe?rel=0" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen className='mb-10'
        ></iframe>
      </div>
  );
}

export default VideoPlayer;
