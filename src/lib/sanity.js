import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const sanityClient = createClient({
  projectId: "vgxoohhy",
  dataset: "maimisolardata",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
