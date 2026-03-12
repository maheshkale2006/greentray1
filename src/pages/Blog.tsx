import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

type Blog = {
  id:string
  title:string
  description:string
  image:string
  category:string
  read_time:string
  created_at:string
}

export default function Blog(){

const [blogs,setBlogs] = useState<Blog[]>([])

useEffect(()=>{ 
loadBlogs()
},[])

async function loadBlogs(){

const { data, error } = await supabase
.from("blogs")
.select("*")
.order("created_at",{ascending:false})

console.log("BLOG DATA:", data)
console.log("BLOG ERROR:", error)

if(data) setBlogs(data)

}

return(
<>
<Navbar/>

{/* HEADER */}

<section className="bg-green-600 text-white py-16 px-10">

<h1 className="text-3xl font-bold">
Garden Blog
</h1>

<p className="text-green-100 mt-2">
Tips, guides, and stories from the world of organic gardening
</p>

</section>


{/* BLOG GRID */}

<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

{blogs.map((b)=>(
<div key={b.id} className="bg-white rounded-xl shadow hover:shadow-lg">

<img
src={b.image}
className="w-full h-52 object-cover rounded-t-xl"
/>

<div className="p-5">

<div className="flex items-center gap-3 text-sm">

<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
{b.category}
</span>

<span className="text-gray-400">
📅 {b.created_at}
</span>

</div>

<h3 className="font-semibold text-lg mt-3">
{b.title}
</h3>

<p className="text-gray-500 text-sm mt-2">
{b.description}
</p>

<div className="flex justify-between mt-4 text-sm">

<span className="text-gray-400">
⏱ {b.read_time}
</span>

<Link
to={`/blog/${b.id}`}
className="text-green-600 font-semibold"
>
Read More →
</Link>

</div>

</div>

</div>
))}

</div>

</>
)

}