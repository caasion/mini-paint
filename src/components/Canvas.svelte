<script lang="ts">
  import Konva from "konva";
  import {Stage, Layer, Rect, Line, type KonvaMouseEvent} from 'svelte-konva';
  import { currentColor } from "../stores/palette";
  import { currentPen, pens } from "../pens";
  import { currentTool } from "../tools";
  import { currentTextInput } from "../text";

  let stage: Stage;
  let layer: Layer;
  let background: Rect;

  let isPainting = $state(false);
  let isShaping = $state(false);
  let isTextDrawing = $state(false);
  let currentLine: Konva.Line | null = $state(null);
  let currentRectangle: Konva.Rect | null = $state(null);
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

    currentLine = new Konva.Line({
      points: [pos.x, pos.y, pos.x, pos.y],
      stroke: $currentColor,
      ...pens[$currentPen].line
    })

    layer.node.add(currentLine);
  }

  function startErasing() {
    isPainting = true;

    let pos = stage.node.getPointerPosition();
    if (!pos) return;

    console.log("Erasing")

    currentLine = new Konva.Line({
      points: [pos.x, pos.y, pos.x, pos.y],
      stroke: $currentColor,
      ...pens['eraser'].line
    })

    layer.node.add(currentLine);
  }

  function continueDrawing() {
    if (!isPainting) return;

    const pos = stage.node.getPointerPosition()
    if (!pos) return;

    if (!currentLine) return;
    currentLine.points([...currentLine.points(), pos.x, pos.y])
    layer.node.add(currentLine);
  }

  function finishDrawing() {
    isPainting = false;
    if (!currentLine) return;
  }

  function startRectangle() {
    isShaping = true;

    let pos = stage.node.getPointerPosition();
    if (!pos) return;

    currentRectangle = new Konva.Rect({
      x: pos.x,
      y: pos.y,
      stroke: 'black',
      strokeWidth: 4,
      width: 0,
      height: 0,
    })
  }

  function continueRectangle() {
    if (!isShaping) return;

    const pos = stage.node.getPointerPosition()
    if (!pos) return;

    if (!currentRectangle) return;
    currentRectangle.width(pos.x - currentRectangle.x())
    currentRectangle.height(pos.y - currentRectangle.y())
    layer.node.add(currentRectangle);
  }

  function finishRectangle() {
    isShaping = false;
  }

  function putText(text: string) {
    let pos = stage.node.getPointerPosition();
    if (!pos) return;

    const simpleText = new Konva.Text({
      x: pos.x,
      y: pos.y,
      text: text,
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: $currentColor
    });

    layer.node.add(simpleText)
  }

  function startTextDrawing() {
    isTextDrawing = true;

    let pos = stage.node.getPointerPosition();
    if (!pos) return;

    putText("💩")
  }

  function continueTextDrawing() {
    if (!isTextDrawing) return;

    const pos = stage.node.getPointerPosition()
    if (!pos) return;

    putText("💩")
  }

  function finishTextDrawing() {
    isTextDrawing = false;
  }

  function onMouseDown(e: KonvaMouseEvent) {
    if ($currentTool == "Pen") {
      startDrawing();
    } else if ($currentTool == "Eraser") {
      startErasing();
    } else if ($currentTool == "Bucket") {
      fillCanvas();
    } else if ($currentTool == "Rectangle") {
      startRectangle();
    } else if ($currentTool == "Text") {
      putText($currentTextInput);
    } else if ($currentTool == "Text Draw") {
      startTextDrawing();
    }
  }

  function onMouseUp(e: KonvaMouseEvent) {
    if ($currentTool == "Pen" || $currentTool == "Eraser") finishDrawing();
    else if ($currentTool == "Rectangle") finishRectangle();
    else if ($currentTool == "Text Draw") finishTextDrawing();
    
  }

  function onMouseMove(e: KonvaMouseEvent) {
    if ($currentTool == "Pen" || $currentTool == "Eraser") continueDrawing();
    if ($currentTool == "Rectangle") continueRectangle();
    if ($currentTool == "Text Draw") continueTextDrawing();
  }
    
</script>
<div onclick={() => setBackground()}>
  CHANGE BACKGROUND WOWOWOWO!
</div>


<Stage width={1000} height={1000} bind:this={stage} onmousedown={(e) => onMouseDown(e)} onmouseup={(e) => onMouseUp(e)} onmousemove={(e) => onMouseMove(e)}>
  
  <Layer >
    <Rect bind:this={background} x={0} y={0} width={1000} height={1000} fill="white" />
  </Layer>
  <Layer bind:this={layer}>

  </Layer>
</Stage>