import { gql } from "@apollo/client";
//import { Button, Header } from "ui";
import { getClient } from "../../lib/client";
import { type Hop, QueryFindManyHopArgs } from "types";
import Link from "next/link";

//import { Query, ResolversTypes } from "types";
const query = gql`
  query FindHops {
    findManyHop {
      id
      name
      urlString
      slug
    }
  }
`;
export default async function HopsIndexPage() {
  const client = getClient();
  const { data } = await client.query<{
    findManyHop: (Hop & { urlString: string })[];
  }>({
    query,
  });
  console.log(data);
  return (
    <>
      <Link href="/hops/create">Create New</Link>
      <ul>
        {data.findManyHop.map((hop) => (
          <li key={hop.id}>
            <Link href={hop.urlString}>{hop.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
