<script lang="ts">
  import Konva from "konva";
  import {Stage, Layer, Rect, Line, type KonvaMouseEvent} from 'svelte-konva';
  import { currentColor } from "../stores/palette";
  import { currentPen, pens } from "../pens";
    import { currentTool } from "../tools";

  let stage: Stage;
  let layer: Layer;
  let background: Rect;

  let isPainting = $state(false);
  let currentLine: Konva.Line | null = $state(null);
  let brushSize = 6;

  function setBackground() {
    background.node.fill("#aaaaaa")
  }

  function fillCanvas() {
    const newFill = new Konva.Rect({
      x: 0,
      y: 0,
      height: 1000,
      width: 1000,
      fill: $currentColor
    })

    layer.node.add(newFill);
  }

  function startDrawing() {
    isPainting = true;

      let pos = stage.node.getPointerPosition();
      if (!pos) return;

      console.log(pens[$currentPen])

      currentLine = new Konva.Line({
        points: [pos.x, pos.y, pos.x, pos.y],
        stroke: $currentColor,
        ...pens[$currentPen].line
      })

      layer.node.add(currentLine);
  }

  function onMouseDown(e: KonvaMouseEvent) {
    if ($currentTool == "Pen") {
      startDrawing()
    } else if ($currentTool == "Bucket") {
      fillCanvas()
    }
  }

  function finishDrawing() {
    isPainting = false;
    if (!currentLine) return;
  }

  function onMouseUp(e: KonvaMouseEvent) {
    if ($currentTool == "Pen") finishDrawing();
    
  }

  function continueDrawing() {
    if(!isPainting) return;

    const pos = stage.node.getPointerPosition()
    if (!pos) return;

    if (!currentLine) return;
    currentLine.points([...currentLine.points(), pos.x, pos.y])
    layer.node.add(currentLine);
  }
  
  function onMouseMove(e: KonvaMouseEvent) {
    if ($currentTool == "Pen") continueDrawing();
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