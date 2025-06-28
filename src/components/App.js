import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id="main" style={{ padding: '100px' }}>
      <Tooltip text="Tooltip for heading">
        <h2>Hover over me</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
