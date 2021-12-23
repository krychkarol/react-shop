import * as React from 'react';
import { DataGrid, useGridApiContext, useGridState } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
    }
});

const theme = createTheme({
    palette: {
      secondary: {
        main: '#292929',
      }
    },
  });

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  return (
    <ThemeProvider theme={theme}>
        <Pagination
        color="secondary"
        count={state.pagination.pageCount}
        page={state.pagination.page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    </ThemeProvider>
  );
}

export default function DataTable({products, columns}) {

    const classes = useStyles();

    return (
        <DataGrid
            className={classes.root}
            rows={products}
            columns={columns}
            pagination
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
                Pagination: CustomPagination,
            }}
            disableColumnMenu
            disableSelectionOnClick
        />
    );
}