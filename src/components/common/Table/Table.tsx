import type { ReactNode } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
} from "@mui/material";
import StyledTableRow from "./StyledTableRow";
import SkeletonTable from "../../ui/Skeleton/SkeletonTable";

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps<T extends Record<string, ReactNode>> {
  data: T[] | undefined;
  columns: Column[];
  loading: boolean;
  onRowClick?: (row: T) => void;
}

const Table = <T extends Record<string, ReactNode>>({
  data,
  columns,
  loading,
  onRowClick,
}: TableProps<T>) => {
  if (loading) return <SkeletonTable />;

  const isOnRowClickEnabled = typeof onRowClick === "function";

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.accessor}>{col.Header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <StyledTableRow
              key={index}
              clickable={isOnRowClickEnabled}
              aria-label={`View details for ${row.name}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <TableCell key={col.accessor}>{row[col.accessor]}</TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
