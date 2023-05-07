import React from 'react';
import './App.scss';
import Intro from './pages/intro';
import Skills from './pages/skills';
import Exp from './pages/exp';
export const PageContext = React.createContext({});

function App() {
  return (
    <div className='App'>
      <PageContext.Provider value={{ page: 1 }}>
        <Intro />
        <Skills />
        <Exp />
      </PageContext.Provider>
    </div>
  );
}

export default App;
