import { writable } from "svelte/store";

/* Types */
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

/* Stores */
export const currentPen = writable("Pen");

export function setCurrentPen(pen: string) {
    currentPen.set(pen);
    console.log("Selected pen:", pen)
}

const brushConfig: PenConfig = {
    id: 'brush',
    label: 'Brush',
    line: {
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    }
}

const pencilConfig: PenConfig = {
    id: 'pencil',
    label: 'Pencil',
    line: {
        strokeWidth: 2,
        lineCap: 'butt',
        lineJoin: 'round',
    }
}

const eraserConfig: PenConfig = {
    id: 'eraser',
    label: 'Eraser',
    line: {
        strokeWidth: 5,
        globalCompositeOperation: 'destination-out'
    }
}

export const pens: Record<string, PenConfig> = {
    'brush': brushConfig,
    'pencil': pencilConfig,
    'eraser': eraserConfig,
}

export type Pen = 'brush' | 'pencil';

export const penList = ['brush', 'pencil']