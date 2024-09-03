<script lang="ts">
  import CodeSmellList from './CodeSmellList.svelte';
  import ProgressTracking from './ProgressTracking.svelte';

  export let yamlData: any;
  export let codeSmells: any[];

</script>

<div>
  <h2>YAML File</h2>
  <pre>{JSON.stringify(yamlData, null, 2)}</pre>
  
  <CodeSmellList {codeSmells} />
  <ProgressTracking {codeSmells} />
</div>

<style>
  div {
    margin-top: 2rem;
  }
  pre {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 4px;
  }
</style>
