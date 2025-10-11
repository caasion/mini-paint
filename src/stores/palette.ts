import { writable } from "svelte/store";
import type { Tool } from "../types";

export const currentColor = writable("#000000");

export function setCurrentColor(color: string) {
    currentColor.set(color);
}

export const currentTool = writable("");

export function setCurrentTool(tool: Tool) {
    currentTool.set(tool);
    console.log("Set current tool:", tool)
}