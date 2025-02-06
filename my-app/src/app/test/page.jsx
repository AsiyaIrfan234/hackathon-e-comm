import React from 'react'
import { client } from "@/sanity/lib/client";

export default async function page() {
    const data = await client.fetch('*[_type=="product"]')
    console.log(data);
    
  return (
    <div>
        <img src={data[1].imagePath} alt="" />
    </div>
  )
}








