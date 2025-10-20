function ProfileCard({ name, email, birthDate, phone }) {
  return (
    <div className="card h-100 shadow-sm bg-secondary pb-0">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-light">{name}</h5>
        <p className="card-text mb-0 text-light"><strong>Email:</strong> {email}</p>
        <p className="card-text mb-0 text-light"><strong>Data urodzin:</strong> {birthDate}</p>
        <p className="card-text mb-0 text-light"><strong>Telefon:</strong> {phone}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
