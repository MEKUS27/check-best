import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
import "./dataTable.scss";

const DataTable = ({ columns, rows, slug }) => {
  const handleDelete = (id) => {
    // delete the item (to implement)
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 70,
    renderCell: (params) => (
      <div className="action">
        {/* <Link to={`/${slug}/${params.row.id}`}>
          <img src="/view.svg" alt="View" />
        </Link> */}
        <button
          className="delete"
          onClick={() => handleDelete(params.row.id)}
          aria-label={`Delete ${slug} with id ${params.row.id}`}
        >
          <img src="/delete.svg" alt="Delete" /> 
        </button>
      </div>
    ),
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
