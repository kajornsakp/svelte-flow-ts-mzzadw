<script lang="ts">
  export let codeSmells: any[];

</script>

<h3>Code Smells</h3>
<ul>
  {#each codeSmells as smell}
    <li>{smell.description}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background-color: #f8d7da;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
  }
</style>
