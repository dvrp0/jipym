<svelte:head>
    <title>소개 - 문학의 불을 지피다</title>
</svelte:head>

<div class="info">
    <img class="logo" alt="DVRP" src="/images/DVRP.png" />
    <div class="links">
        <a href="https://velog.io/@dvrp"><img alt="velog" src="/images/icons/velog.webp" /></a>
        <a href="https://github.com/dvrp0/jipym"><img alt="Github" src="/images/icons/github.webp" /></a>
    </div>
</div>
<p>지핌은 인공지능을 이용해 최근 대두되는 어휘력 빈곤과 독서량 부족 문제를 해결해 보기 위해 진행한 프로젝트입니다.</p>
<p>매일 오전 6시마다 파인 튜닝한 KoGPT2을 이용해 새로운 수필이 생성되며, Stable Diffusion을 이용해 사이트 배경색이 생성된 수필에 어울리도록 변경됩니다.</p>

<style>
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contents: center;
    }

    .logo {
        width: 20rem;
    }

    .links {
        display: flex;
        align-items: center;
        justify-contents: center;
        margin: 1.5rem 0;
    }

    .links img {
        width: 1.25rem;
        margin-right: 0.75rem;
    }
</style>