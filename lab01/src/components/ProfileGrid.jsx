import { useContext } from "react";
import AppContext from "../data/AppContext";
import ProfileCard from "./ProfileCard";

function ProfileGrid({ columns }) {
  const { items } = useContext(AppContext);
  const colClass = `col-md-${Math.floor(18 / columns)}`;

  return (
    <div className="container my-4 bg-dark">
      <div className="row g-3 pt-3 pb-3">
        {items.map((person) => (
          <div className={colClass} key={person.id}>
            <ProfileCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGrid;
