import ProfileCard from './ProfileCard';

function ProfileGrid({ people, columns }) {

  const colClass = `col-md-${Math.floor(18 / columns)}`;

  return (
    <div className="container my-4 bg-dark">
      <div className="row g-3 pt-3 pb-3">
        {people.map((person, index) => (
          <div className={colClass} key={person.id ?? index}>
            <ProfileCard
              name={person.name}
              email={person.email}
              birthDate={person.birthDate}
              phone={person.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGrid;
