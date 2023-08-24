import { gql } from "@apollo/client";
import { getClient } from "../../../lib/client";
import { HopCreateInput } from "types";
import { redirect } from "next/navigation";

const mutation = gql`
  mutation CreateHop($data: HopCreateInput!) {
    createOneHop(data: $data) {
      id
      name
      slug
    }
  }
`;
export default function Page() {
  async function createHop(data: FormData) {
    "use server";

    const client = getClient();
    const d = Object.fromEntries(data);
    console.log(d);
    const res = await client.mutate({
      mutation,
      variables: {
        data: {
          name: d.name,
          slug: d.name,
        },
      },
    });
    console.log(res);
    const url = `/hops/${res.data.createOneHop.slug}`;
    redirect(url);
  }
  return (
    <>
      <h4>HopCreate</h4>
      <form action={createHop}>
        <input type="text" name="name" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
