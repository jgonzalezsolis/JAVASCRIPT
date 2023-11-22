
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontents';
import Advertisement from './components/Advertisement';

                
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}
                
export default App;

