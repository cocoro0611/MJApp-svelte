import { derived } from "svelte/store";
import i18n from "sveltekit-i18n";

export const { t, locale, locales, loading, loadTranslations } = new i18n({
  loaders: ["test"].map((key) => ({
    locale: "ja",
    key,
    loader: async () => (await import(`./ja/${key}.json`)).default,
  })),
});

export const entrifiy = (key: string, values: string[]) =>
  derived(t, ($t) =>
    values.map((value) => ({ value, name: $t(`${key}.${value}`) }))
  );
