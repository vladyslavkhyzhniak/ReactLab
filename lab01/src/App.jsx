import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import NotFound from './pages/NotFound';
import Lab03 from './pages/lab03'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="lab01" element={<Lab01 />} />
        <Route path="lab02/:id" element={<Lab02 />} />
        <Route path="lab03" element={<Lab03/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
