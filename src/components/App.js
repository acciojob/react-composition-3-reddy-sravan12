// App.js
import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Tooltip text="This is a tooltip!">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="More info here">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Hover over this text
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
