
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      // Replace with your dataset name
  apiVersion: '2024-01-01',   // Replace with your API version
  useCdn: true,               // Use CDN for public, non-sensitive data
});
