<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let url: string = '';
  const dispatch = createEventDispatcher();

  const submitUrl = () => {
    if (url) {
      dispatch('input', url);
    }
  };
</script>

<div>
  <input type="text" bind:value={url} placeholder="Enter GitLab repository URL" />
  <button on:click={submitUrl}>Analyze</button>
</div>

<style>
  input {
    width: 70%;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
  }
</style>
