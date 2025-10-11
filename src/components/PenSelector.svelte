<script>
    import { penList, setCurrentPen } from "../pens";
</script>

<div style="display: flex">
    {#each penList as pen, id}
        <button onclick={() => setCurrentPen(pen)}>
            <p>{pen} !!!!!</p>
            
        </button>
    {/each}
</div>

