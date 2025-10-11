<script>
    import { currentTool, setCurrentTool } from "../stores/palette";
</script>

<div style="display: flex">
    <div onclick={() => setCurrentTool("Brush")}>
        Brush!!!!
    </div>
    <div onclick={() => setCurrentTool("Bucket")}>
        Bucket!!!!
    </div>
</div>

