import { gql } from "@apollo/client";
//import { Button, Header } from "ui";
import { getClient } from "../../../lib/client";
import { type Hop, QueryFindFirstHopArgs } from "types";
import Link from "next/link";

//import { Query, ResolversTypes } from "types";
const query = gql`
  query FindHop($slug: String!) {
    findFirstHop(where: { slug: { equals: $slug } }) {
      name
      slug
    }
  }
`;
export default async function HopDetailPage({ params: { slug } }) {
  const client = getClient();
  console.log({ slug });
  const { data } = await client.query<Hop>({
    query,
    variables: {
      slug,
    },
  });
  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
