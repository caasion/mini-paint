import type { PenConfig } from "./types";

const brushConfig: PenConfig = {
    id: 'brush',
    label: 'Brush',
    line: {
        strokeWidth: 5,
        lineCap: 'round',
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

const pencilConfig: PenConfig = {
    id: 'pencil',
    label: 'Pencil',
    line: {
        strokeWidth: 2,
        lineCap: 'butt',
        lineJoin: 'round',
    }
}

export const pens: Record<string, PenConfig> = {
    'brush': brushConfig,
    'eraser': eraserConfig,
    'pencil': pencilConfig
}