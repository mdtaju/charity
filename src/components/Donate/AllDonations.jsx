import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

const columns = [
      { id: 'fullName', label: 'User Name', minWidth: 170 },
      { id: 'phone', label: 'Phone', minWidth: 170 },
      {
            id: 'city',
            label: 'City',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'district',
            label: 'District',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'address',
            label: 'Address',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'longNum',
            label: 'Long Number',
            minWidth: 170,
      },
      {
            id: 'latNum',
            label: 'Lat Number',
            minWidth: 170,
      },
      {
            id: 'productCondition',
            label: 'Product Condition',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'productName',
            label: 'Product Description',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'date',
            label: 'Creation Date',
            minWidth: 170,
            // format: (value) => value.toFixed(2),
      },
      {
            id: 'receiveDate',
            label: 'Given Date',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'receiveTime',
            label: 'Time Range',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
      },
      {
            id: 'trackID',
            label: 'Track ID',
            minWidth: 170,
            // format: (value) => value.toFixed(2),
      },
      {
            id: 'trackStatus',
            label: 'Track Status',
            minWidth: 120,
            // format: (value) => value.toFixed(2),
      },
      {
            id: 'createdBy',
            label: 'Created By',
            minWidth: 120,
            format: (value) => value.toLocaleString('en-US'),
      },

];

// function createData(name, code, population, size) {
//       const density = population / size;
//       return { name, code, population, size, density };
// }



export default function AllDonations({ donations }) {
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const rows = [

      ];
      const handleChangePage = (event, newPage) => {
            setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
      };

      return (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                    <TableRow>
                                          {columns.map((column) => (
                                                <TableCell
                                                      key={column.id}
                                                      align={column.align}
                                                      style={{ minWidth: column.minWidth }}
                                                >
                                                      {column.label}
                                                </TableCell>
                                          ))}
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {donations && donations
                                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                          .map((row, i) => {
                                                return (
                                                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                                            {columns.map((column) => {
                                                                  const value = row[column.id];
                                                                  return (
                                                                        <TableCell key={column.id} align={column.align}>
                                                                              {column.format && typeof value === 'number'
                                                                                    ? column.format(value)
                                                                                    : value}
                                                                        </TableCell>
                                                                  );
                                                            })}
                                                      </TableRow>
                                                );
                                          })}
                              </TableBody>
                        </Table>
                  </TableContainer>
                  <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={donations && donations.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                  />
            </Paper>
      );
}
