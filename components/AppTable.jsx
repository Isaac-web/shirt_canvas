import TableBody from "@components/AppTableBody";
import TableHead from "@components/AppTableHead";

const AppTable = ({ columns, data = [] }) => {
  return (
    <table className="w-full">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default AppTable;
