import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import path from "path";

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $components: path.resolve("./src/components"),
            $assets: path.resolve("./src/assets")
        }
    }
};

export default config;