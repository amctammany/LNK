import { Box, Typography } from "@mui/material";
import { Hop } from "types";

export interface HopFormProps {
  hop: Hop;
}
export function HopForm({ hop }: HopFormProps) {
  return (
    <Box>
      <Typography variant="h2">Hop Form</Typography>
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

export default HopForm;
