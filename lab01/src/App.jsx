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
import AppProvider from "./data/AppProvider";
import Lab05 from './pages/lab05';
import UserDetails from "./pages/UserDetails";
import PostComments from "./pages/PostComments";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab03" element={<Lab03 />} />
          <Route path="lab04" element={<Lab04 />} />
          <Route path="lab04/add" element={<AddProfileForm />} />
          <Route path="lab04/edit/:id" element={<EditProfileForm />} />
          <Route path="lab05" element={<Lab05 />} />
          <Route path="/lab5/users/:id" element={<UserDetails />} />
          <Route path="/lab5/posts/:id/comments" element={<PostComments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
