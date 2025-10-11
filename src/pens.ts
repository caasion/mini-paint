import type { PenConfig } from "./types";

export const brushConfig: PenConfig = {
    id: 'brush',
    label: 'Brush',
    line: {
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    }
}

export const eraserConfig: PenConfig = {
    id: 'eraser',
    label: 'Eraser',
    line: {
        strokeWidth: 5,
        globalCompositeOperation: 'destination-out'
    }
}

export const pencilConfig: PenConfig = {
    id: 'pencil',
    label: 'Pencil',
    line: {
        strokeWidth: 2,
        lineCap: 'butt',
        lineJoin: 'round',
    }
}