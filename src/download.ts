import type Konva from "konva";

export function downloadStagePNG(stage: Konva.Stage | null, filename = 'drawing.png') {
  if (!stage) return;
  const dataUrl = stage.toDataURL({ pixelRatio: 2 }); // higher-res export
  downloadDataURL(dataUrl, filename);
}

export function downloadDataURL(dataUrl: string, filename: string) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}