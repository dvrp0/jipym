<script lang="ts">
    export let input: string;
    export let body: string;
    export let date: string;
</script>

<div class="container">
    <p class="input">{input}</p>
    <p class="body">{body}</p>
    <div class="info">
        <span>{date}</span>
        <span class="info-separator">·</span>
        <span>{input}</span>
    </div>
</div>

<style>
    .container {
        width: calc(var(--width) / 1.895);
        margin-bottom: 7rem;
    }

    .input {
        font-family: "KOTRALEAP";
        font-size: 8.5em;
        letter-spacing: 1rem;
        opacity: 0.4;
        color: transparent;
        -webkit-text-stroke: 0.5px var(--c-foreground);
        margin-top: 0;
        margin-bottom: -4.8rem;
    }

    .body {
        position: relative;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .info {
        display: flex;
        align-items: center;
    }

    .info span {
        font-family: "Pretendard";
        font-variation-settings: "wght" 900;
        font-size: 1.125rem;
        opacity: 0.15;
    }

    .info-separator {
        margin: 0 1.25rem;
    }
</style>
