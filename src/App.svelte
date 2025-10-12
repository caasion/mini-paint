<script lang="ts">
  import { get } from 'svelte/store';
  import Canvas from './components/Canvas.svelte'
  import Palette from './components/Palette.svelte';
  import PenSelector from './components/PenSelector.svelte';
  import TextTool from './components/TextTool.svelte';
  import ToolSelector from './components/ToolSelector.svelte';
  import { currentTool } from './tools';
    import Header from './components/Header.svelte';
</script>

<main>
  {#if $currentTool == "Text"}
    <TextTool />
  {/if}
  <Canvas />
</main>
