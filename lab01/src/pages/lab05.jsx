import useFetch from "../hooks/UseFetch";
import { useEffect, useReducer, useState } from "react";
import TableDataReducer from "../data/TableDataReducer";
import PostsTable from "../components/PostsTable";

function Lab5Page() {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const [sortConfig, setSortConfig] = useState({
        column: null,
        direction: "natural",
    });

    const [tableState, dispatch] = useReducer(TableDataReducer, {
        rows: [],
        naturalRows: [],
    });

    useEffect(() => {
        const baseRows = posts.map(p => {
            const user = users.find(u => u.id === p.userId);
            const postComments = comments.filter(c => c.postId === p.id);

            return {
                id: p.id,
                userId: p.userId,
                userName: user?.name ?? "Unknown",
                postTitle: p.title,
                postBody: p.body,
                commentsCount: postComments.length
            };
        });

        dispatch({ type: "SET_DATA", payload: baseRows });
        setSortConfig({ column: null, direction: "natural" });
    }, [posts, users, comments]);

    const handleSortChange = (column, direction) => {
        setSortConfig({ column, direction });
        dispatch({ type: "SORT", payload: { column, direction } });
    };

    return (
        <div className="container mt-4">
            <h1>Lab 5</h1>

            <PostsTable
                rows={tableState.rows}
                sortConfig={sortConfig}
                onSortChange={handleSortChange}
            />
        </div>
    );
}

export default Lab5Page;
