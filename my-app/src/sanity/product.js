import { type } from "os";
import { title } from "process";

  export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'imagePath',
      title: 'ImagePath',
      type: 'url',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};









// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'string',
//     },
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'imagePath',
//       title: 'Image Path',
//       type: 'url',
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'discountPercentage',
//       title: 'Discount Percentage',
//       type: 'number',
//     },
//     {
//       name: 'isFeaturedProduct',
//       title: 'Is Featured Product',
//       type: 'boolean',
//     },
//     {
//       name: 'stockLevel',
//       title: 'Stock Level',
//       type: 'number',
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//     },
//   ],
// };
