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
export function Requirement9() {
  return (
    <div class="main-div">
      <h1>Requirement 9: A Bar Chart to plot the issues closed for every week for everyRepo</h1>
      <div class="grid-container">
        {[...Array(8).keys()].map((week) => (
          <FetchAPI class="grid-item" key={week + 1} URL={`https://flaskapp1spm-xhkbppznoa-uc.a.run.app//fetch/issues/closed/week=${week + 1}`} />
        ))}
      </div>
    </div>
  );
}

export function Requirement10(){
  return (
    <div class="main-div">
    <h1>Requirement 10: A Stack-Bar Chart to plot the created and closed issues for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://flaskapp1spm-xhkbppznoa-uc.a.run.app/fetch/issues/stacked" />
  </div>
  )
}

let repos = ["openai/openai-cookbook", "openai/openai-python", "openai/openai-quickstart-python", 
  "milvus-io/pymilvus/", "SeleniumHQ/selenium", "golang/go", "google/go-github", "angular/material", 
  "angular/angular-cli", "sebholstein/angular-google-maps", "d3/d3", "facebook/react", "tensorflow/tensorflow", 
  "keras-team/keras", "pallets/flask"]

export function Requirement11_1(){
  return (
    <div class="main-div">
      <h1>Requirement 11.1</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.1 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.1/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.1/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.1/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.1/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_2(){
  return (
    <div class="main-div">
      <h1>Requirement 11.2</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.2 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.2/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.2/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.2/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.2/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_3(){
  return (
    <div class="main-div">
      <h1>Requirement 11.3</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.3 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.3/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.3/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.3/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.3/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_4(){
  return (
    <div class="main-div">
      <h1>Requirement 11.4</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.4 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.4/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.4/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.4/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.4/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_5(){
  return (
    <div class="main-div">
      <h1>Requirement 11.5</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.5 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.5/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.5/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.5/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.5/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_6(){
  return (
    <div class="main-div">
      <h1>Requirement 11.6</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.6 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.6/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.6/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.6/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.6/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement11_7(){
  return (
    <div class="main-div">
      <h1>Requirement 11.7</h1>
        {[...Array(15).keys()].map((repo) => (
          <div>
            <h2>11.7 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Modelloss</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.7/modelloss/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/lstm/11.7/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/sm/11.7/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`https://a5lstmflaskapp-mas63rw6oa-uc.a.run.app/fetch/ph/11.7/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
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

