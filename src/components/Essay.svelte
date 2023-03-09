<script lang="ts">
    export let input: string;
    export let body: string;
    export let date: string;
</script>

<div class="container">
    <p class="input">{input}</p>
    <p class="body">{body}</p>
    <span class="date">{date} {input}</span>
</div>

<style>
    .container {
        width: calc(var(--width) / 1.895);
    }

    .input {
        font-family: "KOTRALEAP";
        font-size: 12.75rem;
        letter-spacing: 1rem;
        opacity: 0.4;
        color: transparent;
        -webkit-text-stroke: 0.5px var(--c-foreground);
        margin-top: 0;
        margin-bottom: -7.25rem;
    }

    .body {
        position: relative;
        font-size: 1.825rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .date {
        font-family: "Pretendard";
        font-variation-settings: "wght" 900;
        font-size: 1.25rem;
        opacity: 0.15;
    }
</style>
