/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DatagridProps {
  rows: any;
  columns: GridColDef[];
}

const Datagrid: React.FC<DatagridProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={37.5}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            color: "grey",
            fontWeight: "bold",
          },
        }}
        pagination
      />
    </div>
  );
};

export default Datagrid;
