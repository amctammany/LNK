import { gql } from "@apollo/client";
import { Button, Header } from "ui";
import { getClient } from "../lib/client";

const query = gql`
  {
    findManyRecipe {
      name
    }
  }
`;
export default async function Page() {
  const client = getClient();
  const { data } = await client.query({ query });
  return (
    <>
      <Header text="Web" />
      <Button />
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
