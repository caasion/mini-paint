<script lang="ts">
  import Konva from "konva";
  import {Stage, Layer, Rect, Line, type KonvaMouseEvent} from 'svelte-konva';

  let stage: Stage;

  let isPainting = $state(false);
  let currentLine: Konva.Line = $state(null);
  let brushColor = "#000000"
  let brushSize = 6;

  function paint(e: KonvaMouseEvent) {
    isPainting = true;

    console.log("painting")

    let pos = stage.node.getPointerPosition();

    console.log(pos)

    if (pos) {
      currentLine = new Konva.Line({
      points: [pos.x, pos.y],
      stroke: brushColor,
      strokeWidth: brushSize,
      lineCap: 'round',
      lineJoin: 'round',
      listening: false,
      // tension: 0.4, // optional smoothing
    })
    }

    
  }
</script>

<Stage width={1000} height={1000} bind:this={stage} onmousedown={(e) => paint(e)}>
  <Layer>
    <Rect x={100} y={100} width={400} height={200} fill="blue" />
  </Layer>
</Stage>