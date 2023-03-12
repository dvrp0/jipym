import type { EssayData } from "$lib/EssayData";
import { writable } from "svelte/store";

export const essays = writable({} as EssayData[]);