import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function TableRow({ row }) {
    return (
        <tr>
            <td>
                <Link to={`/lab5/users/${row.userId}`} className="text-decoration-none">
                    {row.userName}
                </Link>
            </td>

            <td>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header  >{row.postTitle}</Accordion.Header>
                        <Accordion.Body >{row.postBody}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </td>

            <td className="text-center">
                <Button
                    as={Link}
                    variant="link"
                    className="text-success p-0"
                    to={`/lab5/posts/${row.id}/comments`}
                >
                    {row.commentsCount}
                </Button>
            </td>
        </tr>
    );
}

export default TableRow;
