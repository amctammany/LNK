import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Hop } from "types";

export interface HopDisplayProps {
  hop: Hop & { urlString: string };
}
export function HopDisplay({ hop }: HopDisplayProps) {
  return (
    <Box>
      <Typography variant="h2">Hop Display</Typography>
      <Link href={`${hop.urlString}/edit`}>Edit</Link>
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

export default HopDisplay;
