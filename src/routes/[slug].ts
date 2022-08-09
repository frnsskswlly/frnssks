import type { RequestHandler } from "@sveltejs/kit";
import { client, gql, type Post } from "src/lib/utils";

export const GET: RequestHandler = async ({ params }) => {
    const query = gql`
        query Post($slug: String!) {
            post(where: {slug: $slug}) {
                slug
                title
                publishedAt
                content {
                    html
                }
                category {
                    name
                }
                author {
                    name
                }
             }
        }
      `;

    const data = await client<{ post: Post }>(query, { slug: params.slug });

    if (!data?.post) {
        return {
            status: 404
        };
    }

    return {
        body: {
            post: data.post
        }
    };
}