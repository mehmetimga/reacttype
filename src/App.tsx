import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExemple from './components/ReducerExemple';
import ContextExemple from './components/ContextExemple';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExemple from './components/RefExemple';

function App() {
  const instructor = {
    firstName: 'Can',
    lastName: 'Boz',
  };
  const instructorList = [
    {
      firstName: 'Can',
      lastName: 'Boz',
    },
    {
      firstName: 'Canan',
      lastName: 'Boz',
    },
    {
      firstName: 'Osman',
      lastName: 'Boz',
    },
  ];
  return (
    <div className="App">
      {/* <Home name="Can Boz" courseNumber={15} isBest />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
      <EventActions /> */}
      {/* <LoginCheck /> */}
      {/* <ReducerExemple />
      <ThemeContextProvider>
        <ContextExemple />
      </ThemeContextProvider> */}
      <RefExemple />
    </div>
  );
}

export default App;
