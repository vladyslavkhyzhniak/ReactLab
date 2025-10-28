import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import Lab03 from './pages/lab03';
import Lab04 from './pages/lab04';
import NotFound from './pages/NotFound';
import AddProfileForm from './pages/AddProfileForm';
import EditProfileForm from './pages/EditProfileForm';
import AppContext from "./data/AppContext";
import { useReducer } from "react";
import AppReducer from "./data/AppReducer";
import { people } from "../module-data";

function App() {
  const [state, appDispatch] = useReducer(AppReducer, people);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab03" element={<Lab03 />} />
          <Route path="lab04" element={<Lab04 />} />
          <Route path="lab04/add" element={<AddProfileForm />} />
          <Route path="lab04/edit/:id" element={<EditProfileForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
