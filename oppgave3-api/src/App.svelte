<script>
  const api_key = "fAHH9ZxMXsxDgGhlMFyUOvsViC1LvJ9s";
  let q = "";
  let gif;
  const limit = 1;

  const getGif = () => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&${limit}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        gif = json.data[0].images.downsized_medium.url;
      });
  };
</script>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
    background-color: #dae7ff;
    background-color: #08aeea;
    background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  }
  :global(*) {
    box-sizing: border-box;
  }

  main {
    display: grid;
    place-items: center;
    height: 100%;
  }
  header {
    position: absolute;
    top: 10rem;
    width: 100%;
    display: grid;
    padding: 0 20vw 0 20vw;
  }
  /* .gif {
    width: 40vw;
    height: 40vh;
    background-color: #eee;
    padding: 2rem;
  }*/

  .sonic {
    width: 280px;
  }

  input {
    border-radius: 200px;
    padding: 20px;
    border: none;
    box-shadow: 2px 5px 4px #00000087;
    font-family: "Amatic SC", cursive;
    font-size: 2rem;
    outline: none;
  }
  button {
    border-radius: 200px;
    padding: 10px;
    background-color: #4040a0;
    color: white;
    font-family: "Righteous", cursive;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    box-shadow: 2px 5px 4px #00000087;
    cursor: pointer;
  }
</style>

<main>
  <header>
    <input placeholder="What'cha lookin' 4?" type="text" bind:value={q} />
    <button on:click={getGif}>GIF ME!</button>
  </header>

  {#if gif}
    <img src={gif} alt={q} />
  {:else}
    <img
      src="https://i.pinimg.com/originals/1d/fa/7f/1dfa7f72302302d9571d553ff51ecfd2.gif"
      alt="sonic waiting"
      class="sonic" />
  {/if}

</main>
