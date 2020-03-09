import React from 'react';
import './App.css';
import ResponsiveLayout from './ResponsiveLayout.js';

function App() {
  return (
    <div className="App">
      <ResponsiveLayout breakpoint={767}
        renderDesktop={() => (<h1>Desktop</h1>)}
        renderMobile={() => (<h1>Mobile</h1>)}
        renderTablet={() => (<h1>Tablet1</h1>)}
      />
    </div>
  );
}

export default App;
