import React from 'react';
import './style.css';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

export default function App() {
  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
}
