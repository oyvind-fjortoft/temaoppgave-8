<script>
  import Navbar from "./Navbar.svelte";
  import Player from "./Player.svelte";
  import AddPlayer from "./AddPlayer.svelte";

  let players = [];

  // { name: 'Navn Navnesen', points: 50  }

  const addPlayer = e => {
    const newPLayer = e.detail;
    players = [...players, newPLayer];
  };

  const removePlayer = e => {
    players = players.filter(player => player.name !== e.detail);
  };
</script>

<main>
  <Navbar />
  <div class="container">
    <AddPlayer on:addplayer={addPlayer} />
    {#if players.length === 0}
      <p>Vennligst legg til spillere.</p>
    {:else}
      {#each players as player}
        <Player
          name={player.name}
          points={player.points}
          on:removeplayer={removePlayer} />
      {/each}
    {/if}

  </div>
</main>
