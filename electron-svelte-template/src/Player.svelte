<script>
  import { createEventDispatcher } from "svelte";
  import { players } from "./store";
  const dispatch = createEventDispatcher();
  export let name;
  export let points;
  let showControls = false;
  const addPoint = () => {
    points += 1;
    $players.[name].points = $players.[name].points + 1
  };
  $: console.log($players)
  const removePoint = () => (points -= 1);
  const toggleControls = () => (showControls = !showControls);
  const onDelete = () => dispatch("removeplayer", name);
</script>

<style>
  h1 {
    color: #000000;
    font-weight: 500;
  }
  h3 {
    margin-bottom: 10px;
    font-weight: 400;
  }
</style>

<main>

  <div class="card">
    <div class="navn-buttons">
      <h1>{name}</h1>
      <div class="opp-ned-slett">
        <button class="btn-opp-ned" on:click={toggleControls}>
          {#if showControls}▲{:else}▼{/if}
        </button>
        <button class="btn-slett" on:click={onDelete}>✕</button>
      </div>
    </div>
    <div class="poeng">
      <h3>Poeng: {points}</h3>
      {#if showControls}
        <button class="btn-minus-en" on:click={removePoint}>-1</button>
        <button class="btn-pluss-en" on:click={addPoint}>+1</button>
        <input type="number" bind:value={points} />
      {/if}
    </div>
  </div>

</main>
