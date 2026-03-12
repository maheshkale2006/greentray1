import Navbar from "../components/Navbar";
import { useParams,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";

type Blog={
id:string
title:string
description:string
image:string
content:string
category:string
read_time:string
created_at:string
}

export default function BlogDetail(){

const {id} = useParams()

const [blog,setBlog] = useState<Blog|null>(null)

useEffect(()=>{
loadBlog()
},[])

async function loadBlog(){

const {data} = await supabase
.from("blogs")
.select("*")
.eq("id",id)
.single()

if(data) setBlog(data)

}

if(!blog) return <p>Loading...</p>

return(
<>
<Navbar/>

{/* HERO */}

<div className="relative h-[350px]">

<img
src={blog.image}
className="w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/40 flex items-center">

<div className="max-w-5xl mx-auto px-6 text-white">

<span className="bg-green-500 px-3 py-1 rounded-full text-sm">
{blog.category}
</span>

<h1 className="text-4xl font-bold mt-4">
{blog.title}
</h1>

<div className="mt-3 text-sm opacity-90">

📅 {blog.created_at} • ⏱ {blog.read_time}

</div>

</div>

</div>

</div>


{/* CONTENT */}

<div className="max-w-4xl mx-auto px-6 py-12">

<Link
to="/blog"
className="text-gray-500 text-sm"
>
← Back to Blog
</Link>

<p className="text-gray-600 mt-6">
{blog.description}
</p>

<div
className="prose max-w-none mt-6"
dangerouslySetInnerHTML={{__html:blog.content}}
/>

{/* CTA */}

<div className="bg-green-600 text-white rounded-xl p-8 mt-12">

<h3 className="text-xl font-bold">
Ready to Start Your Garden?
</h3>

<p className="mt-2 opacity-90">
Explore our range of organic vegetable seedling trays and start growing fresh produce at home.
</p>

<Link
to="/shop"
className="inline-block mt-4 bg-white text-green-700 px-5 py-2 rounded-lg font-semibold"
>
Shop Now
</Link>

</div>

</div>

</>
)

}