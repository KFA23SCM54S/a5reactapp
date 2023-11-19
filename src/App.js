import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// export function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export function Requirement5(){
  return (
    <div class="main-div">
      <h1>Requirement 5: A Line Chart to plot the issues for every Repo</h1>
      <FetchAPI URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/issuesline" />
    </div>
  )
}

export function Requirement6(){
  return (
    <div class="main-div">
    <h1>Requirement 6: A Bar Chart to plot the issues created for every month for every Repo</h1>
    <div class="grid-container">
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/issues/created/month=1" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/issues/created/month=2" />
    </div>
  </div>
)
}
export function Requirement7(){
  return (
    <div class="main-div">
    <h1>Requirement 7: A Bar Chart to plot the stars for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/stars" />
  </div>
)
}

export function Requirement8(){
  return (
    <div class="main-div">
    <h1>Requirement 8: A Bar Chart to plot the forks for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/forks" />
  </div>
)
}
export function Requirement9(){
  return (
    <div class="main-div">
    <h1>Requirement 9: A Bar Chart to plot the issues closed for every week for everyRepo</h1>
    <div class="grid-container">
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=1" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=2" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=3" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=4" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=5" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=6" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=7" />
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=8" />
    </div>
  </div>
)
}

export function Requirement10(){
  return (
    <div class="main-div">
    <h1>Requirement 10: A Stack-Bar Chart to plot the created and closed issues for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/stacked" />
  </div>
  )
}

function FetchAPI({ URL }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        // Convert the image response to a blob
        const imageBlob = await response.blob();

        // Create a blob URL for the image
        const imageUrl = window.URL.createObjectURL(imageBlob);

        // Set the image URL in the state
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [URL]);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Image from flask app" />}
    </div>
  );
}

export default FetchAPI;

