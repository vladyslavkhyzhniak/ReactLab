import React, { useContext } from "react";
import AppContext from "../data/AppContext";

function ProfileCard({ id, name, email, birthDate, phone, rating, checked }) {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;

  return (
    <div className="card h-100 shadow-sm bg-secondary pb-0">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-light">{name}</h5>
        <p className="card-text mb-0 text-light"><strong>Email:</strong> {email}</p>
        <p className="card-text mb-0 text-light"><strong>Data urodzin:</strong> {birthDate}</p>
        <p className="card-text mb-0 text-light"><strong>Telefon:</strong> {phone}</p>
        <p className="card-text mb-0 text-light"><strong>Ocena:</strong> {rating ?? 0}</p>

        <div className="mt-auto d-flex gap-2">
          <button
            className="btn btn-warning btn-sm"
            onClick={() => dispatch({ type: "rate", id })}
          >
            Oceń
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch({ type: "delete", id })}
          >
            Usuń
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={() => dispatch({ type: "check", id })}
          >
            Zaznacz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
