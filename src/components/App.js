import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id="main">
      <Tooltip text="Tooltip for heading">
        <h2>Hover over me</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <span>This is a span</span>
      </Tooltip>
    </div>
  );
}

export default App;
