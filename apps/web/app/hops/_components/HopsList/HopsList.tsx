import { Box, Typography } from "@mui/material";
import { Hop } from "types";

export interface HopsListProps {
  hop: Hop;
}
export function HopsList({ hop }: HopsListProps) {
  return (
    <Box>
      <Typography variant="h2">Hop Display</Typography>
      <ul>
        {Object.entries(hop).map(([k, v]) => (
          <li key={k}>
            <b>{k}</b>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default HopsList;
