import React from 'react';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Lord of the Ring Quotes</p>
      </header>
      <section>
        <Posts/>
      </section>
    </div>
  );
}

export default App;
