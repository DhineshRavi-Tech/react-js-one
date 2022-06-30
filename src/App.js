import React, { useState } from 'react';
import './style.css';
import Paper from '@mui/material/Paper';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows } from './generator';

const [columns] = useState([
  { name: 'name', title: 'Name' },
  { name: 'gender', title: 'Gender' },
  { name: 'city', title: 'City' },
  { name: 'car', title: 'Car' },
]);
const [rows] = useState(generateRows({ length: 8 }));
const [selection, setSelection] = useState([]);

export default function App() {
  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <PagingState defaultCurrentPage={0} pageSize={2} />
        <SelectionState
          selection={selection}
          onSelectionChange={setSelection}
        />
        <IntegratedPaging />
        <IntegratedSelection />
        <Table />
        <TableHeaderRow />
        <TableSelection showSelectAll />
        <PagingPanel />
      </Grid>
    </Paper>
  );
}
