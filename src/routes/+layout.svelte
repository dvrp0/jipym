<script>
    import "../app.postcss";
</script>

<nav>
    <div class="nav-container">
        <a href="/"><img alt="홈" src="/images/logo.png" /></a>
        <ul>
            <li><a href="/gallery">갤러리</a></li>
            <li><a href="/about">소개</a></li>
        </ul>
    </div>
</nav>

<main>
    <div class="main-content">
        <slot />
    </div>
</main>

<style global lang="postcss">
    @import "./root.css";

    nav img {
        width: 6rem;
    }

    nav ul {
        display: flex;
        padding: 0;
        margin: 3rem 0;
        gap: 3rem;
        list-style-type: none;
    }

    .nav-container {
        padding: 0 calc(calc(100vw - var(--width)) / 2);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main-content {
        margin: 8px;
    }

    @media (max-width: 74rem) {
        .nav-container {
            padding: 0 calc(1rem + 8px);
        }
    }
</style>