<script>
    import { setCurrentPen } from "../pens";
    import { setCurrentTool, toolList } from "../tools";
</script>

<div class="tool-container">
    <button onclick={() => {
        setCurrentTool("Pen")
        setCurrentPen("pencil")
    }}>
        <img src="/src/icons/pencil.svg" alt="Pencil" style="width:45px; height:40px; position: relative; ">
    </button>
    
    
    <button onclick={() => {
        setCurrentTool("Pen")
        setCurrentPen("brush")
    }}>
        <img src="/src/icons/brush.svg" alt="Brush" class="icon">
    </button>

    <button onclick={() => {
        setCurrentTool("Eraser")
    }}>
        <img src="/src/icons/eraser.svg" alt="Eraser" class="icon">
    </button>

    
    <button onclick={() => {
        setCurrentTool("Bucket")
    }}>
        <img src="/src/icons/bucket.svg" alt="Bucket" class="icon">
    </button>

    <button onclick={() => {
        setCurrentTool("Text")
    }}>
        <img src="/src/icons/text-tool.svg" alt="Text" class="icon">
    </button>

    <button onclick={() => {
        setCurrentTool("Text Draw")
    }}>
        <img src="/src/icons/poop.svg" alt="Text" class="icon">
    </button>
    
</div>

<style>
    .tool-container {
        color: white;
    }

    .icon {
        width: 32px;
        height: 40px;
    }
</style>