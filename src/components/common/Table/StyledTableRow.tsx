import { TableRow } from "@mui/material";
import styled from "styled-components";

interface StyledTableRowProps {
  clickable?: boolean;
}

const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export default StyledTableRow;
