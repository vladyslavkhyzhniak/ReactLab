import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Lab5PostComments() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function fetchPostAndComments() {
            setIsLoading(true);
            setError(null);
            try {
                const [postResponse, commentsResponse] = await Promise.all([
                    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
                    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
                ]);

                if (!postResponse.ok || !commentsResponse.ok) {
                    throw new Error("Nie udało się pobrać danych posta lub komentarzy.");
                }

                const [postData, commentsData] = await Promise.all([
                    postResponse.json(),
                    commentsResponse.json(),
                ]);

                if (!ignore) {
                    setPost(postData);
                    setComments(commentsData);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                }
            } finally {
                if (!ignore) {
                    setIsLoading(false);
                }
            }
        }

        fetchPostAndComments();

        return () => {
            ignore = true;
        };
    }, [id]);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Komentarze do posta</h2>
                <Link to="/lab05" className="btn btn-sm btn-outline-secondary">
                    Powrót
                </Link>
            </div>
            {isLoading && <p className="text-muted mt-3">Ładowanie danych posta...</p>}
            {error && <p className="text-danger mt-3">{error}</p>}
            {!isLoading && !error && post && (
                <div className="mt-3">
                    <div className="bg-light p-3 rounded mb-4">
                        <h3 className="h5 text-success mb-2">{post.title}</h3>
                        <p className="lead mb-0">{post.body}</p>
                    </div>
                    <h4 className="h5">Lista komentarzy</h4>
                    <div className="list-group">
                        {comments.map((comment) => (
                            <div className="list-group-item" key={comment.id}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <strong>{comment.name}</strong>
                                    <span className="text-muted small">{comment.email}</span>
                                </div>
                                <p className="mb-0">{comment.body}</p>
                            </div>
                        ))}
                        {!comments.length && (
                            <div className="list-group-item text-muted">
                                Brak komentarzy dla tego posta.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lab5PostComments;