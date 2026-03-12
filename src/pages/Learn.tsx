import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

export default function Learn(){

const [guides,setGuides] = useState<any[]>([]);

useEffect(()=>{
loadGuides();
},[]);

async function loadGuides(){

const { data } = await supabase
.from("guides")
.select("*");

if(data){
setGuides(data);
}

}

return(
<>
<Navbar/>

{/* HEADER */}

<section className="bg-green-600 text-white py-16 px-10">

<h1 className="text-3xl font-bold">
Growing Guides
</h1>

<p className="text-green-100 mt-2">
Learn how to grow and care for your favorite vegetables
</p>

</section>


{/* GUIDES */}

<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

{guides.map((g)=>(
<div key={g.id} className="bg-white rounded-xl shadow hover:shadow-lg">

<img
src={g.image}
className="w-full h-48 object-cover rounded-t-xl"
/>

<div className="p-4">

<h3 className="font-semibold text-lg">
{g.name}
</h3>

<p className="text-gray-500 text-sm mt-1">
{g.description}
</p>

<Link
to={`/guide/${g.id}`}
className="text-green-600 text-sm font-semibold mt-3 inline-block"
>
View Guide →
</Link>

</div>

</div>
))}

</div>

</>
)
}