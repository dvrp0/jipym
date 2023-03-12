<script lang="ts">
    import type { PageData } from "./$types";
    import { essays } from "../store";
    import Essay from "$components/Essay.svelte";
    import { onMount } from "svelte";

    export let data: PageData;
    essays.update(x => x = data.essays);

    onMount(() => {
        document.documentElement.style.setProperty("--c-background-from", $essays[0].gradientFrom);
        document.documentElement.style.setProperty("--c-background-to", $essays[0].gradientTo);
        document.documentElement.style.setProperty("--background-angle", `${data.angle}deg`);
    });
</script>

<!-- TODO: svelte-meta-tags -->
<svelte:head>
    <title>지핌 - 문학의 불을 지피다</title>
</svelte:head>

<Essay input={$essays[0].input} body={$essays[0].body} date={$essays[0].key} />