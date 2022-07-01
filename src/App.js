import React, { useState } from 'react';
import './style.css';
import Paper from '@mui/material/Paper';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  EditingState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

import { generateRows, globalSalesValues } from './generator';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const AddButton = ({ onExecute }) => (
  <div style={{ textAlign: 'center' }}>
    <Button color="primary" onClick={onExecute} title="Create new row">
      New
    </Button>
  </div>
);

const EditButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Edit row" size="large">
    <EditIcon />
  </IconButton>
);

const DeleteButton = ({ onExecute }) => (
  <IconButton
    onClick={() => {
      // eslint-disable-next-line
      if (window.confirm('Are you sure you want to delete this row?')) {
        onExecute();
      }
    }}
    title="Delete row"
    size="large"
  >
    <DeleteIcon />
  </IconButton>
);

const CommitButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Save changes" size="large">
    <SaveIcon />
  </IconButton>
);

const CancelButton = ({ onExecute }) => (
  <IconButton
    color="secondary"
    onClick={onExecute}
    title="Cancel changes"
    size="large"
  >
    <CancelIcon />
  </IconButton>
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return <CommandButton onExecute={onExecute} />;
};

const getRowId = (row) => row.id;

export default function App() {
  const [columns] = useState([
    { name: 'product', title: 'Product' },
    { name: 'region', title: 'Region' },
    { name: 'amount', title: 'Sale Amount' },
    { name: 'discount', title: 'Discount' },
    { name: 'saleDate', title: 'Sale Date' },
    { name: 'customer', title: 'Customer' },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...globalSalesValues },
      length: 12,
    })
  );

  const [tableColumnExtensions] = useState([
    { columnName: 'product', width: 200 },
    { columnName: 'region', width: 180 },
    { columnName: 'amount', width: 180, align: 'right' },
    { columnName: 'discount', width: 180 },
    { columnName: 'saleDate', width: 180 },
    { columnName: 'customer', width: 200 },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <EditingState onCommitChanges={commitChanges} />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
        width={170}
          showAddCommand
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
      </Grid>
    </Paper>
  );
}
