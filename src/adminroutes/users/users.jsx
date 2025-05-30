import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import "./users.scss";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || "/noavatar.png"} alt="avatar" />
    ),
  },
  {
    field: "firstName",
    type: "string",
    headerName: "Username",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  // {
  //   field: "verified",
  //   headerName: "Verified",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // API fetching (commented out for now)
  /*
  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () => fetch("http://localhost:8800/api/users").then(res => res.json()),
  });
  */

  return (
    <div className="users">
      <div className="info">
        <h1>Registered users</h1>
        {/* <button onClick={() => setOpen(true)}>Add New User</button> */}
      </div>

      {/* Use either static userRows or fetched data */}
      {/* Uncomment below to use API data */}
      {/* {isLoading ? "Loading..." : <DataTable slug="users" columns={columns} rows={data} />} */}
      
      <DataTable className="data" slug="users" columns={columns} rows={userRows} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
