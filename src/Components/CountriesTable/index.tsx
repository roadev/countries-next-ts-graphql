import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { SerializedCountry } from '../interfaces';

interface Column {
  id: 'emoji' | 'name' | 'code' | 'currency' | 'continent';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'emoji', label: 'Bandera', minWidth: 90 },
  { id: 'name', label: 'País', minWidth: 170 },
  { id: 'code', label: 'Código', minWidth: 100 },
  {
    id: 'currency',
    label: 'Moneda',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('es-CO'),
  },
  {
    id: 'continent',
    label: 'Continente',
    minWidth: 120,
    align: 'right',
    format: (value: number) => value.toLocaleString('es-CO'),
  },
];

interface Props {
  countries: SerializedCountry[];
}

export default function StickyHeadTable({ countries }: Props) {
  console.log('countries', countries);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            {countries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((country) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={country.code}>
                    {columns.map((column) => {
                      const value = country[column.id];
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
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
