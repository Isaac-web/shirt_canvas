const AppTableHead = ({ columns }) => {
    if (!columns || !columns?.length) return null;

    return (
        <thead>
            <tr className="bg-gray-100 min-w-full">
                {columns.map(c => <th align={c["align"] || "left"} className="p-5">{c?.label}</th>)}
            </tr>
        </thead>
    )
}

export default AppTableHead