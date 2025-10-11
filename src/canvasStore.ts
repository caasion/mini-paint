import type Konva from "konva";
import { writable } from "svelte/store";

export const stageStore = writable<Konva.Stage | null>(null)

export const layerStore = writable<Konva.Layer | null>(null);