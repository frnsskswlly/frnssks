<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"; 
    export const load: Load = ({props}) => {
        return {
            props,
            stuff: {
                title: "Blog",
                description: "All Article"
            }
        };
    };
</script>

<script lang="ts">
    import { date , type Post } from '$lib/utils';
    export let posts: Post[];
</script>

<div class="my-28">
    <form class="w-[100%] flex mb-6 px-[12px] relative items-center m-0 rounded bg-gray-900 border-[2px] border-emerald-600" action="">
        <label class="items-center flex justify-center" for="">
            <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </label>
        <input class="w-[80%] h-[40px] p-2 appearance-none bg-transparent flex-1 outline-none text-emerald-600" type="text" placeholder="Cari">
    </form>
    <div class="grid grid-cols-1 gap-4">  
        {#each posts as post}
            <div class="p-5 border-[1px] text-slate-200 rounded"> 
                <div class="text-sm mb-2">{date(post.publishedAt)}</div>
                <div class="text-base text-emerald-600 font-bold hover:text-rose-600"><a href="/{post.slug}">{post.title}</a></div>
            </div>
        {/each}
    </div>
</div>