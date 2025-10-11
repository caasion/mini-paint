import { writable } from "svelte/store";

export type Tool = "Pen" | "Bucket" | "Eraser";

export const toolList: Tool[] = ["Pen", "Bucket", "Eraser"];

export const currentTool = writable<Tool>("Pen");

export function setCurrentTool(tool: Tool) {
    currentTool.set(tool);
    console.log("Selected tool:", tool)
}