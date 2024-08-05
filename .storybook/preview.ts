import type { Preview } from "@storybook/svelte";
// storybookとtailwindを依存させる
import "../src/app.css";
// 辞書を日本語で表示
import { loadTranslations } from "../src/lib/translations/translations";

loadTranslations("ja", "/");

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
