import type { RequestHandler } from "@sveltejs/kit";
import { client, gql, type Post } from "src/lib/utils";

export const GET: RequestHandler = async () => {
    const postQuery = gql`
        query Posts {
          posts (orderBy: publishedAt_DESC, last: 6) {
            slug
            title
            publishedAt

          category {
            name
          }

          author {
            name
          }
        }
      }
    `;
 
    const data = await client<{ posts : Post[] }>(postQuery);

    return {
        body: {
            posts: data.posts,
        }
    };
}