import Container from '../components/Container';
import NewProfile from '../components/NewProfile';
import { people } from '../../module-data';

function Lab03() {
  return (
    <>
      <h1 className="my-4">Laboratorium 3 - Profil osób</h1>
      <Container element={NewProfile} data={people} />
    </>
  );
}

export default Lab03;
