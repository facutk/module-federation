import React from 'react';
import './App.css';

const MFE1_Button = React.lazy(
  () => import('module1/Button')
);


function App() {
  return (
    <div className="App">
      <div>
        <React.Suspense fallback='Loading Button'>
          <MFE1_Button>test!</MFE1_Button>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
