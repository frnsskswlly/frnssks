
<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"; 
    export const load: Load = ({props}) => {
        return {
            props,
            stuff: {
                title: "Home | Frnssks",
                description: "A Blog"
            }
        };
    };
</script>

<script lang="ts">
    import About from '$lib/about.svelte';
import Contact from '$lib/contact.svelte';
    import Hero from '$lib/hero.svelte';
    import { date, type Post } from '$lib/utils';
    export let posts: Post[];
</script>


<Hero />
<About />

<div class="my-24">
    <h1 class="mb-5">Artikel Paling Baru</h1>
    <div class="md:grid md:grid-cols-3 md:gap-4">  
        {#each posts as post}
            <div class="p-5 mb-4 border-[1px] text-gray-500 rounded-md"> 
                <div class="text-sm">{date(post.publishedAt)}</div>
                <div class="text-base text-emerald-600 hover:text-emerald-200 mt-1"><a href="/{post.slug}">{post.title}</a></div>
            </div>  
        {/each}
    </div>
    <button class="flex mx-auto mt-6 text-white text-base px-3 py-2 bg-emerald-600 border-emerald-600 border-[1px] rounded"><a href="/blog">View all</a></button>
</div>

<Contact />