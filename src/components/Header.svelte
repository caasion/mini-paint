<script>
    import { downloadStagePNG } from "../download";
    import { layerStore, stageStore } from "../canvasStore";
    import { clearLayer } from "../clear";

</script>

<h1 style="text-align:center; margin:16px 0 8px; line-height:1; font-family: 'Indie Flower', cursive;">
  Mini Paint
</h1>
<hr style="margin:6px 0">
<h3 style="display:inline-block; margin-right:30px; font-family: 'Indie Flower', cursive;">
    <button>
        File
    </button>
</h3>
<h3 
    style="display:inline-block; margin-right:30px; font-family: 'Indie Flower', cursive;"
    
>
    <button onclick={() => downloadStagePNG($stageStore, "download.png")}>
        Save
    </button>
</h3>
<h3 style="display:inline-block; margin-right:30px; font-family: 'Indie Flower', cursive;">
    <button>View</button>
</h3>
<h3 style="display:inline-block; font-family: 'Indie Flower', cursive;">
    <button onclick={() => clearLayer($layerStore)}>Clear</button>
</h3>
<!-- <img src="redo.jepg.png" alt="Redo" style="width:40px; height:auto; position: relative; left: 60px; top: 13px;">
<img src="undo.jepg.webp" alt="Undo" style="width:40px; height:auto; position: relative; right: 35px; top: 13px;"> -->

