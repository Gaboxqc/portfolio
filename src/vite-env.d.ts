/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Allow importing non-default static assets that don't ship their own types
// (e.g. the CV PDF imported directly from `public/`).
declare module "*.pdf" {
  const src: string;
  export default src;
}
