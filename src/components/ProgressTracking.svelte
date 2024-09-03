<script lang="ts">
  export let codeSmells: any[];
  let progress = new Array(codeSmells.length).fill(false);

  const toggleProgress = (index: number) => {
    progress[index] = !progress[index];
  };
</script>

<h3>Progress Tracking</h3>
<ul>
  {#each codeSmells as smell, index}
    <li>
      <input type="checkbox" bind:checked={progress[index]} on:change={() => toggleProgress(index)} />
      {smell.description}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
</style>
