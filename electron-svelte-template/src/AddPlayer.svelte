<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let player = {
    name: "",
    points: 0
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch("addplayer", player);
    player = {
      name: "",
      points: 0
    };
  };
</script>

<form on:submit={onSubmit} class="grid-3">
  <input type="text" placeholder="Spillerens navn" bind:value={player.name} />
  <input type="number" placeholder="Poengsum" bind:value={player.points} />
  <input type="submit" class="btn-legg-til-spiller" value="Legg til spiller" />

</form>
