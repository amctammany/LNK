import { gql } from "@apollo/client";
import { getClient } from "../../../lib/client";
import { HopCreateInput } from "types";

const mutation = gql`
  mutation CreateHop($data: any) {
    createOneHop(data: $data) {
      name
      slug
    }
  }
`;
export default function Page() {
  async function createHop(data: FormData) {
    "use server";

    const client = getClient();
    try {
      console.log(data);
      const d = Object.fromEntries(data);
      console.log(d);
      const r = await client.mutate({
        mutation,
        variables: {
          data: {
            name: d.name,
            slug: d.name,
          },
        },
      });
      console.log(r);
    } catch (e) {
      console.log(e);
      console.error(e.networkError.errors);
    }
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
