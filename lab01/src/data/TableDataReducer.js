function TableDataReducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                rows: action.payload,
                naturalRows: action.payload,
            };

        case "SORT": {
            const { column, direction } = action.payload;

            if (direction === "natural") {
                return {
                    ...state,
                    rows: state.naturalRows,
                };
            }

            const sorted = [...state.rows].sort((a, b) => {
                const A = a[column];
                const B = b[column];

                if (typeof A === "string") {
                    return direction === "asc"
                        ? A.localeCompare(B)
                        : B.localeCompare(A);
                }

                return direction === "asc" ? A - B : B - A;
            });

            return {
                ...state,
                rows: sorted,
            };
        }

        default:
            return state;
    }
}

export default TableDataReducer;
