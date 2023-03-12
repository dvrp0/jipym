import type { EssayData } from "$lib/EssayData";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const essays = async () => {
        const response = await fetch("https://jipym-1-g8095706.deta.app/essays");
        return await response.json() as EssayData[];
    };

    return { essays: essays(), angle: Math.random() * 360 };
}