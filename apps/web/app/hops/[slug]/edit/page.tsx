import { gql } from "@apollo/client";
//import { Button, Header } from "ui";
import { getClient } from "../../../../lib/client";
import { type Hop, QueryFindFirstHopArgs } from "types";
import Link from "next/link";
import { HopForm } from "../../_components";

//import { Query, ResolversTypes } from "types";
const query = gql`
  query FindHop($slug: String!) {
    findFirstHop(where: { slug: { equals: $slug } }) {
      name
      urlString
      slug
    }
  }
`;
export default async function HopEditPage({ params: { slug } }) {
  const client = getClient();
  const { data } = await client.query<{ findFirstHop: Hop }>({
    query,
    variables: {
      slug,
    },
  });
  return <HopForm hop={data.findFirstHop} />;
}
