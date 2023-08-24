import { gql } from "@apollo/client";
//import { Button, Header } from "ui";
import { getClient } from "../lib/client";
import { type Recipe } from "types";

//import { Query, ResolversTypes } from "types";
const query = gql`
  {
    countHop
  }
`;
export default async function Page() {
  const client = getClient();
  const { data } = await client.query<Recipe>({
    query,
  });
  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
