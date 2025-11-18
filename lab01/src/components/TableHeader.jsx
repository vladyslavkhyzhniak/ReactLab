import Dropdown from "react-bootstrap/Dropdown";

const SORT_OPTIONS = [
    { value: "asc", label: "Ascending order" },
    { value: "desc", label: "Descending order" },
    { value: "natural", label: "Natural order" },
];

function TableHeader({ columnKey, label, activeSort, onSort }) {

    const currentDirection =
        activeSort.column === columnKey ? activeSort.direction : "natural";

    return (
        <th className="p-0">
            <Dropdown>
                <Dropdown.Toggle
                    variant="success"
                    className="w-100 text-start rounded-0 border-0"
                >
                    {label}
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                    {SORT_OPTIONS.map((opt) => (
                        <Dropdown.Item
                            key={opt.value}
                            active={currentDirection === opt.value}
                            onClick={() => onSort(columnKey, opt.value)}
                        >
                            {opt.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </th>
    );
}

export default TableHeader;
