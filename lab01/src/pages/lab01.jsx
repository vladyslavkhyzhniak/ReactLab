import '../../src/App.css'
import ProfileCard from '../components/ProfileCard'
import {people} from '../../module-data'
import ProfileGrid from '../components/ProfileGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProfileGrid people={people} columns={3} />
  );
}

export default App
