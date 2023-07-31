import _ from "lodash";

const AppTableBody = ({ columns, data }) => {

    const renderCell = (d, c) => {
        if (c?.render) return c.render(d);

        return _.get(d, c?.value);
    }


    return (
        <tbody>
            {data.map(d => <tr className="bg-gray-50">
                {columns.map(c => <td className="p-5" align={c["alignBody"] || "left"}>{renderCell(d, c)}</td>)}
            </tr>)}
        </tbody>
    )
}

export default AppTableBody