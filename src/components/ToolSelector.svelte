<script>
    import { setCurrentPen } from "../pens";
    import { setCurrentTool, toolList } from "../tools";
</script>

<div style="display: flex; width: 200px; height: 100px; border: 2px solid black; display: flex; justify-content: center; align-items: top;">
    <button onclick={() => {
        setCurrentTool("Pen")
        setCurrentPen("pencil")
    }}>
        <img src="Pencil.png" alt="Pencil" style="width:45px; height:40px; position: relative; ">
    </button>
    
    
    <button onclick={() => {
        setCurrentTool("Pen")
        setCurrentPen("brush")
    }}>
        <img src="Paint.png" alt="Paint" style="width:40px; height:40px; position: relative; ">
    </button>

    <button onclick={() => {
        setCurrentTool("Eraser")
    }}>
        <img src="Eraser.png" alt="Eraser" style="width:40px; height:40px; position: relative; ">
    </button>

    
    <button onclick={() => {
        setCurrentTool("Bucket")
    }}>
        <img src="Bucket.png" alt="Bucket" style="width:40px; height:40px; position: relative; ">
    </button>

    <button onclick={() => {
        setCurrentTool("Text")
    }}>
        <img src="Text.png" alt="Text" style="width:40px; height:40px; position: relative; ">
    </button>

    <button onclick={() => {
        setCurrentTool("Text Draw")
    }}>
        <p>💩</p>
    </button>
    
</div>