export type Tool = "Brush" | "Pen" | "Bucket" | "Eraser";

// Create my own interface for pen configs
export type PenConfig = {
  id: string;
  label: string;
  // Konva.Line config
  line: {
    strokeWidth: number;
    opacity?: number;
    lineCap?: 'round' | 'butt' | 'square';
    lineJoin?: 'round' | 'miter' | 'bevel';
    tension?: number;
    dash?: number[];
    globalCompositeOperation?: GlobalCompositeOperation;
  }
}