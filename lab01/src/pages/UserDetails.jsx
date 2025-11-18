import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

function UserDetails() {
    const { id } = useParams();

    const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!user.id) {
        return <p className="text-muted mt-3">Ładowanie danych użytkownika...</p>;
    }

    return (
        <div className="container mt-4">
            <h2>User details</h2>

            <ul className="list-group mt-3">
                <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                <li className="list-group-item"><strong>Username:</strong> {user.username}</li>
                <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                <li className="list-group-item">
                    <strong>Address:</strong> {user.address.street}, {user.address.city}
                </li>
            </ul>
        </div>
    );
}

export default UserDetails;
