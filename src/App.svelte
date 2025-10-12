<script lang="ts">
  import Canvas from './components/Canvas.svelte'
  import Palette from './components/Palette.svelte';
  import TextTool from './components/TextTool.svelte';
  import ToolSelector from './components/ToolSelector.svelte';
  import { currentTool } from './tools';
    import Header from './components/Header.svelte';
</script>

<header class="header">
  <Header />
</header>

<aside class="sidebar">
  <ToolSelector />
  {#if $currentTool == "Text"}
    <TextTool />
  {/if}
  <Palette />
</aside>

<main class="main">
  <Canvas />
</main>

<style>
    body {
        font-family: 'Indie Flower', cursive;
    }
</style>