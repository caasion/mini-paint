import { writable } from "svelte/store";

export const currentColor = writable("#000000");

export function setCurrentColor(color: string) {
    currentColor.set(color);
}



