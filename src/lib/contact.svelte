<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"; 
    export const load: Load = ({props}) => {
        return {
            props,
            stuff: {
                title: "About me | Fransiskus",
                description: "About me"
            }
        };
    };
</script>

<div class="w-[80%] mx-auto my-24">
    <h2 class="text-center mb-10">Simply Hit Me Up on Social Media</h2>
    
    <div class="w-full mx-auto">
        <button class="w-[80%] mx-auto my-3 border-[1px] text-emerald-600 rounded-md flex items-center justify-center"><img class="h-6 mr-2 ml-0 my-3" src="/linkedin.png" alt="blog"><a class="text-base" href="/blog">LinkedIn</a></button>
        <button class="w-[80%] mx-auto my-3 border-[1px] text-emerald-600 rounded-md flex items-center justify-center"><img class="h-6 mr-2 ml-0 my-3" src="/github.png" alt="blog"><a class="text-base" href="/blog">Github</a></button>
        <button class="w-[80%] mx-auto my-3 border-[1px] text-emerald-600 rounded-md flex items-center justify-center"><img class="h-6 mr-2 ml-0 my-3" src="/twitter.png" alt="blog"><a class="text-base" href="/blog">Twitter</a></button>
        <button class="w-[80%] mx-auto my-3 border-[1px] text-emerald-600 rounded-md flex items-center justify-center"><img class="h-6 mr-2 ml-0 my-3" src="/facebook.png" alt="blog"><a class="text-base" href="/blog">Facebook</a></button>
    </div>
</div>