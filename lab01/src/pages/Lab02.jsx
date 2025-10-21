import { people } from '../../module-data';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Notfound from './NotFound'

function Lab02() {
  const { id } = useParams(); 
  const person = people.find(p => p.id?.toString() === id);

  if (!person) {
    return <Notfound/>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-light">Szczegóły osoby</h2>
      <ProfileCard
        name={person.name}
        email={person.email}
        birthDate={person.birthDate}
        phone={person.phone}
      />
    </div>
  );
}

export default Lab02;