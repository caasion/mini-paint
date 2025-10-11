<script lang="ts">
  import Konva from "konva";
  import {Stage, Layer, Rect, Line, type KonvaMouseEvent} from 'svelte-konva';
  import { currentColor } from "../stores/palette";

  let stage: Stage;
  let layer: Layer;
  let background: Rect;

  let isPainting = $state(false);
  let currentLine: Konva.Line | null = $state(null);
  let brushSize = 6;

  function setBackground() {
    background.node.fill("#aaaaaa")
  }

  function onMouseDown(e: KonvaMouseEvent) {
    isPainting = true;

    let pos = stage.node.getPointerPosition();
    if (!pos) return;

    currentLine = new Konva.Line({
      points: [pos.x, pos.y],
      stroke: $currentColor,
      strokeWidth: brushSize,
      lineCap: 'round',
      lineJoin: 'round',
      listening: false,
    })
  }

  function onMouseUp(e: KonvaMouseEvent) {
    isPainting = false;
    if (!currentLine) return;
    
  }
  
  function onMouseMove(e: KonvaMouseEvent) {
    if(!isPainting) return;

    const pos = stage.node.getPointerPosition()
    if (!pos) return;

    if (!currentLine) return;
    currentLine.points([...currentLine.points(), pos.x, pos.y])
    layer.node.add(currentLine);
  }
    
</script>
<div onclick={() => setBackground()}>
  CHANGE BACKGROUND WOWOWOWO!
</div>

<Stage width={1000} height={1000} bind:this={stage} onmousedown={(e) => onMouseDown(e)} onmouseup={(e) => onMouseUp(e)} onmousemove={(e) => onMouseMove(e)}>
  <Layer bind:this={layer}>
    <Rect bind:this={background} x={0} y={0} width={1000} height={1000} fill="white" />
  </Layer>
</Stage>