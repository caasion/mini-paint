<script>
    import { setCurrentTool, toolList } from "../tools";
</script>

<div style="display: flex">
    {#each toolList as tool, id}
        <button onclick={() => setCurrentTool(tool)}>
            <p>{tool} !!!!!</p>
            
        </button>
    {/each}
</div>

