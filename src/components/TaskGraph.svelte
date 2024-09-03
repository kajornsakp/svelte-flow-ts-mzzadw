<script lang="ts">
  import { SvelteFlow, Controls, Background, MiniMap } from '@xyflow/svelte';
  import { onMount } from 'svelte';

  export let codeSmells: any[];

  let nodes = [];
  let edges = [];

  onMount(() => {
    // Generate nodes for each code smell
    nodes = codeSmells.map((smell, index) => ({
      id: `node-${index}`,
      data: { label: smell.description },
      position: { x: index * 150, y: 100 },
      style: {
        background: '#f4f4f4',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      },
    }));

    // Optionally, connect nodes with edges
    edges = codeSmells.map((_, index) => {
      if (index < codeSmells.length - 1) {
        return {
          id: `edge-${index}`,
          source: `node-${index}`,
          target: `node-${index + 1}`,
          animated: true,
        };
      }
      return null;
    }).filter(Boolean);
  });
</script>

<div style="width: 100%; height: 400px;">
  <SvelteFlow {nodes} {edges}>
    <Controls />
    <MiniMap />
    <Background />
  </SvelteFlow>
</div>

<style>
  /* Additional styling can go here */
</style>
