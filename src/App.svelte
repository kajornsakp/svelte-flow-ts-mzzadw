<script lang="ts">
  import RepositoryInput from './components/RepositoryInput.svelte';
  import AnalysisDashboard from './components/AnalysisDashboard.svelte';
  import TaskGraph from './components/TaskGraph.svelte';
  
  // Import the stores
  import { repositoryUrl, yamlData, codeSmells } from './stores/repository';
  
  // Import the services
  import { fetchYAML, analyzeYAML } from './services/analysis';

  // Function to handle user input and update stores
  const handleInput = async (url: string) => {
    repositoryUrl.set(url);  // Update repository URL store

    // Fetch YAML data and analyze for code smells
    const yaml = await fetchYAML(url);
    yamlData.set(yaml);  // Update YAML data store
    const smells = analyzeYAML(yaml);
    codeSmells.set(smells);  // Update code smells store
  };
</script>

<main>
  <!-- User input for the GitLab repository URL -->
  <RepositoryInput on:input={handleInput} />

  <!-- Display dashboard and task graph if there are code smells -->
  {#if $codeSmells.length > 0}
    <AnalysisDashboard {yamlData} {codeSmells} />
    <TaskGraph {codeSmells} />
  {/if}
</main>

<style>
  main {
    padding: 2rem;
  }
</style>
