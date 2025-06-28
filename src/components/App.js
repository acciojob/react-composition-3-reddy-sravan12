// App.js
import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div id="main">
      <Tooltip text="Heading tooltip">
        <h2>Hover over heading</h2>
      </Tooltip>

      <Tooltip text="Paragraph tooltip">
        <p>Hover over paragraph</p>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <span>Some span element</span>
      </Tooltip>
    </div>
  );
}

export default App;
