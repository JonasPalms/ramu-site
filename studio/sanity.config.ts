import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "Ramu Studio",

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: import.meta.env.SANITY_STUDIO_DATASET || "development",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
