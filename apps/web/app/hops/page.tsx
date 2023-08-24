import { gql } from "@apollo/client";
//import { Button, Header } from "ui";
import { getClient } from "../../lib/client";
import { type Recipe, QueryFindManyHopArgs } from "types";
import Link from "next/link";

//import { Query, ResolversTypes } from "types";
const query = gql`
  {
    findManyHop {
      name
      slug
    }
  }
`;
export default async function HopsIndexPage() {
  const client = getClient();
  const { data } = await client.query<Recipe>({
    query,
  });
  return (
    <>
      <Link href="/hops/create">Create New</Link>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
