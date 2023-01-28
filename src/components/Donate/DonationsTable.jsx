import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';

export default function DonationsTable({ rows, columns, ...rest }) {
      return (
            <div style={{ height: 700, width: '100%' }}>
                  <DataGrid
                        columns={columns}
                        rows={rows}
                        {...rest}
                        components={{
                              Toolbar: GridToolbar,
                        }}
                  />
            </div>
      );
}
