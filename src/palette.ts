import { writable } from "svelte/store";

export const currentColor = writable("#000000");

export function setCurrentColor(color: string) {
    currentColor.set(color);
}

export const colors = ["#000000", "#aaaaaa", "#7f2b8f", "#d6549a", "#f4b2f3", "#ffffff"]

