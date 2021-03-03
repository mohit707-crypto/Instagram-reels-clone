import React from 'react';
import VideoCard from './VideoCard';

import './App.css';


function App() {
  return (
    // BEM NAMING CONVETIION
    <div className="app">
     <h1>Lets Build IG REELS CLone</h1>
       <div className="app__top">
        <img className="app__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
          alt=""
        />
        <h1>Reels</h1>
        <div className="app__videos">
          <VideoCard
            channel='developer'
            avatarsrc='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'

            song='Test song - mohit '
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
            likes={77}
            shares={150}
          />
          <VideoCard 
           channel='CartoonNetwork'
           avatarsrc='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'

           song='Test song - mohit '
           url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
           likes={57}
           shares={150}
          />
          <VideoCard /> 
          <VideoCard />
          <VideoCard />
        </div>
       </div>

    </div>
  );
}

export default App;
