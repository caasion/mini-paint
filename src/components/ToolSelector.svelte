<script>
    import { currentTool, setCurrentTool } from "../stores/palette";
    import { tools } from "../types";
</script>

<div style="display: flex">
    {#each tools as tool, id}
        <button onclick={() => setCurrentTool(tool)}>
            <p>{tool} !!!!!</p>
            
        </button>
    {/each}
</div>

