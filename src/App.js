import React, { useState } from 'react';
import './style.css';
import {
  SortingState,
  EditingState,
  PagingState,
  SummaryState,
  IntegratedPaging,
  IntegratedSorting,
  IntegratedSummary,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  PagingPanel,
  DragDropProvider,
  TableColumnReordering,
  TableFixedColumns,
  TableSummaryRow,
} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@mui/material/Paper';
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
import { styled } from '@mui/material/styles';

import { ProgressBarCell } from '../../../theme-sources/material-ui/components/progress-bar-cell';
import { HighlightedCell } from '../../../theme-sources/material-ui/components/highlighted-cell';
import { CurrencyTypeProvider } from '../../../theme-sources/material-ui/components/currency-type-provider';
import { PercentTypeProvider } from '../../../theme-sources/material-ui/components/percent-type-provider';

import { generateRows, globalSalesValues } from './generator';

export default function App() {
  return <p>Hi</p>;
}
