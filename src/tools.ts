import { writable } from "svelte/store";
import type { PenConfig } from "./pens";

export type Tool = "Pen" | "Bucket" | "Eraser" | "Rectangle" | "Text" | "Text Draw";

export const toolList: Tool[] = ["Pen", "Bucket", "Eraser", "Rectangle", "Text", "Text Draw"];

export const currentTool = writable<Tool>("Pen");

export function setCurrentTool(tool: Tool) {
    currentTool.set(tool);
    console.log("Current tool:", tool)
}
