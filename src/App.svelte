<script lang="ts">
  import Canvas from './components/Canvas.svelte'
  import Palette from './components/Palette.svelte';
  import PenSelector from './components/PenSelector.svelte';
  import ToolSelector from './components/ToolSelector.svelte';
</script>

<main>
  <h1>Mini Painter</h1>

  <div class="card">
    <ToolSelector />
    <PenSelector />
    <Palette />
    <Canvas />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
