import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function PostsTable({ rows, sortConfig, onSortChange }) {
    return (
        <table className="table table-bordered mt-4">
            <thead>
                <tr>
                    <TableHeader
                        columnKey="userName"
                        label="User"
                        activeSort={sortConfig}
                        onSortChange={onSortChange}
                    />

                    <TableHeader
                        columnKey="postTitle"
                        label="Post title"
                        activeSort={sortConfig}
                        onSortChange={onSortChange}
                    />

                    <TableHeader
                        columnKey="commentsCount"
                        label="Comments count"
                        activeSort={sortConfig}
                        onSortChange={onSortChange}
                    />
                </tr>
            </thead>

            <tbody>
                {rows.map(row => <TableRow key={row.id} row={row} />)}
            </tbody>
        </table>
    );
}

export default PostsTable;
