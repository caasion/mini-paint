import { writable } from "svelte/store";

/* Stores */
export const currentTextInput = writable("")

export function setTextInput(value: string) {
    currentTextInput.set(value);
}


