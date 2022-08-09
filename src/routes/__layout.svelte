<script>
    import "../app.css";
    import Nav from '$lib/nav.svelte';
    import SEO from '$lib/seo.svelte';
    import Foot from "$lib/foot.svelte";
    
</script>

<SEO />

<header>
    <Nav />
</header>

<main>
    <div class="w-[90%] md:w-[90%] xl:w-[1440px] p-0 mt-[50px] mx-auto">
        <slot />
    </div>
</main>

<footer>
    <Foot />
</footer>