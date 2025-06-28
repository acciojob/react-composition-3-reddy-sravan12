import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id="main" style={{marginTop:"500px"}}>
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>
      <br/>
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
