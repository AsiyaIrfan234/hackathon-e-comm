import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env.js';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});



// import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// // Sanity client setup
// export const client = createClient({
//   projectId: 'yourProjectID', 
//   dataset: 'production',   



//   useCdn: true,                
// })

// // Setup the image URL builder
// const builder = imageUrlBuilder(client)

// // Function to get image URL
// export const urlFor = (source:any) => {
//   if (!source) return ''
  // return builder.image(source).url()  
// }

