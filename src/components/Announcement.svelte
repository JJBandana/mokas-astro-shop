<script>
  import { crossfade, fade } from "svelte/transition";
  import { onDestroy } from "svelte";

  let phrases = [
    "This is the best Stamp book you can get in Japan!",
    "Moka is the most beautiful woman ever ❤️",
    "Jojo is in love with her 💘",
    "And he wants to live with Moka 🏡",
  ];

  let index = 0;
  let [send, receive] = crossfade({ duration: 950, fallback: fade });

  const interval = setInterval(() => {
    index = (index + 1) % phrases.length; // Cambia la frase suavemente
  }, 4000); // Cada 7 segundos

  onDestroy(() => clearInterval(interval)); // Limpia el intervalo cuando el componente se destruye
</script>

<div class="announcement-bar">
  {#each phrases as phrase, i (phrase)}
    {#if i === index}
      <p class="message container" out:send in:receive>
        {phrase}
      </p>
    {/if}
  {/each}
</div>

<style>
  .announcement-bar {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 56px;
    background-color: violet;
    overflow: hidden;

    p {
      color: white;
      min-width: 90%;
      padding: 1rem;
      letter-spacing: 1px;
      text-align: center;
      position: absolute;
      white-space: nowrap;
    }
  }

  /* .message {
    color: white;
    padding: 1rem;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    width: 100%;
  } */
</style>
