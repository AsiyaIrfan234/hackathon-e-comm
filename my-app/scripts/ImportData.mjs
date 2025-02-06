import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: "de1jgwny",
  dataset: "production",
  useCdn: false,
  token: "skA2CTvt0CBmpmKHPmsKG25lCi9nOWdW3tEOxkWUEDEh69ZkWlZ982GvXYSzHnnvqYEUZjK7j8DE8jxd6CSIgvBkZDz1v6KHGz5nPYoDfejtsSE1FWakPTieJUue37yCkQbn7SJYKWtwLu1dIPySHUNGuKhBEit1sRABwcjBzboWJFcSGwVv",
  apiVersion: '2025-01-08',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.response?.status, error.message);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://template-0-beta.vercel.app/api/product');
    const products = response.data;
    // console.log("products ===>> ", products);

    if (!Array.isArray(products)) {
      throw new Error('Invalid API response: Expected an array of products.');
    }

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);
      let imageRef = null;

      // Validate product data
      if (!product.name || !product.price) {
        console.warn(`Skipping invalid product: ${JSON.stringify(product)}`);
        continue;
      }

      // Upload image if available
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath);
      }

      // Prepare product document
      const sanityProduct = {
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description || '',
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: !!product.isFeaturedProduct,
        stockLevel: product.stockLevel || 0,
        category: product.category || 'Uncategorized',
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                // _ref: imageRef,
                   _ref: 'image-id-from-sanity'
              },
            }
          : undefined,
      };

      // Upload to Sanity
      console.log('Uploading product to Sanity:', sanityProduct.name);
      try {
        const result = await client.create(sanityProduct);
        console.log(`Product uploaded successfully: ${result._id}`);
      } catch (error) {
        console.error('Failed to upload product:', sanityProduct.name, error.message);
      }
    }
  
    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
}

importData();




