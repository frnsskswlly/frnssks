<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"; 

    export const load: Load = ({props}) => {
        return {
            props,
            stuff: {
                title: props.post.title,
                description: props.post.description
            }
        };
    };
</script>

<script lang="ts">
    import { date, type Post } from '$lib/utils';
    export let post: Post;
</script>

<div class="my-28">
    <h1 class="font-bold text-emerald-600 mb-3 leading-tight">{post.title}</h1>
    <div>{date(post.publishedAt)}</div>
    <div class="mt-3">
        {@html post.content.html}
    </div> 
</div>