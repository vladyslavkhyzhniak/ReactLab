import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import {people} from '../module-data'
import ProfileGrid from './components/ProfileGrid';

function App() {
  return (
    <ProfileGrid people={people} columns={3} />
  );
}

export default App
