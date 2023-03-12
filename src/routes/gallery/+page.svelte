<script lang="ts">
    import type { EssayData } from "$lib/EssayData";
    import { essays } from "../../store";
    import Essay from "$components/Essay.svelte";
</script>

<svelte:head>
    <title>갤러리 - 문학의 불을 지피다</title>
</svelte:head>

{#each $essays as essay}
<Essay class="essay" input={essay.input} body={essay.body} date={essay.key} />
{/each}