<script lang="ts">
    import type { PageData } from "./$types";
    import Essay from "$components/Essay.svelte";

    export let data: PageData;
</script>

<!-- TODO: svelte-meta-tags -->
<svelte:head>
    <title>지핌 - 문학의 불을 지피다</title>
</svelte:head>

{#each data.essays as essay}
<Essay input={essay["input"]} body={essay["body"]} date={essay["key"]} />
{/each}

<style>

</style>