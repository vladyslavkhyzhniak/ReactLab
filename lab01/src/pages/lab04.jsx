import { useNavigate } from "react-router-dom";

function Lab04() {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/lab04/add");
    };

    return (
        <div className="container mt-4">
            <h2>Lab04</h2>
            <button
                className="btn"
                style={{ padding: "0.5rem 1rem", cursor: "pointer", backgroundColor: "grey" }}
                onClick={handleAdd}
            >
                Dodaj nowy profil
            </button>
        </div>
    );
}

export default Lab04;
