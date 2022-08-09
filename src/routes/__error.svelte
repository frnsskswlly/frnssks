<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"; 

    export const load: Load = ({ error, status }) => {
        return {
            props: {
                error,
                status
            }
        };
    };
</script>

<script lang="ts">
    export let status: number;
    export let error: any;
</script>

<div class="error-message my-28">
    <h1 class="text-emerald-600 font-bold my-3">{status}</h1>

    {#if status === 404}
    <strong>Page not found</strong>
    <p>Maybe going back to the <a class="text-emerald-600" href="/">main page</a> will help</p>
    {:else}
    <div>{error.message}</div>
    {/if}
</div>