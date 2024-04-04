import { defineConfig } from "sanity";
import { iconPicker } from "sanity-plugin-icon-picker";

export default defineConfig({ plugins: [iconPicker()] });
