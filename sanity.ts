import { createClient } from "next-sanity";
import { Image, SanityProjectDetails } from "./typing";
import createImageBuilder from "@sanity/image-url";

export const config: SanityProjectDetails = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wfvodlmm',
  apiVersion: '2021-08-31',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);


export const urlFor = (source: any) => createImageBuilder(config).image(source);