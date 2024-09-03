<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';

  type $$Props = NodeProps;

  export let positionAbsolute: XYPosition = { x:0, y:0 };
</script>

<div class="custom">
  <Handle type="target" position={Position.Top} />
  <div>
    Custom Node
    <div>
      <strong>position: {~~positionAbsolute.x},{~~positionAbsolute.y}</strong>
    </div>
  </div>
  <Handle type="source" position={Position.Bottom} id="a" style="left: 10px;" />
  <Handle type="source" position={Position.Bottom} id="b" style="left: auto; right: 10px;" />
</div>

<style>
  .custom {
    padding: 10px;
    background: white;
    border: 1px solid #555;
  }
</style>