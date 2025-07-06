import { styled, TableRow } from "@mui/material";

interface StyledTableRowProps {
  clickable?: boolean;
}

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== "clickable",
})<StyledTableRowProps>(({ clickable }) => ({
  cursor: clickable ? "pointer" : "default",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

export default StyledTableRow;
