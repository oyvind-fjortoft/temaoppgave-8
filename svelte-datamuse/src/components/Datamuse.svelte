<script>
  let synonyms = [];
  //fetch data
  export let words;

  $: if (words.length > 2) {
    fetch("https://api.datamuse.com/words?rel_rhy=" + words)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        synonyms = json;
      });
  }
</script>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  section > p {
    background-color: rgb(194, 194, 194);
    display: grid;
    place-items: center;
    height: 100%;
  }
</style>

<section>

  {#each synonyms as synonym}
    <p>{synonym.word}</p>
  {:else}
    <p>Please type a word or sentence in the input field</p>
  {/each}
</section>
