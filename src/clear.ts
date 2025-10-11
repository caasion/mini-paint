import type Konva from "konva";

export function clearLayer(layer: Konva.Layer | null) {
    if (!layer) return;
    layer.destroyChildren();
    layer.draw();
  }