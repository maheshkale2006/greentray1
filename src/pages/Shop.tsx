import Navbar from "../components/Navbar";
import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

type Product={
id:string
title:string
description:string
price:number
image:string
category:string
}

export default function Shop(){

const [products,setProducts] = useState<Product[]>([])
const [filter,setFilter] = useState("all")
const [maxPrice,setMaxPrice] = useState(2000)

const { addToCart } = useCart()

useEffect(()=>{
loadProducts()
},[])

async function loadProducts(){

const {data} = await supabase
.from("products")
.select("*")

if(data) setProducts(data)

}

const filteredProducts = products.filter(p =>
(filter==="all" || p.category===filter) &&
p.price <= maxPrice
)

return(
<>
<Navbar/>

<div className="bg-green-600 text-white py-10 px-10">

<h1 className="text-3xl font-bold">
Shop Plant Trays
</h1>

<p className="text-green-100 mt-2">
Find the perfect plants for your home garden
</p>

</div>

<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

{/* FILTERS */}

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Filters
</h3>

<p className="text-sm mb-2">
Category
</p>

<div className="flex gap-2 mb-6">

<button
onClick={()=>setFilter("all")}
className="bg-green-100 px-4 py-1 rounded-full text-sm"
>
All
</button>

<button
onClick={()=>setFilter("mixed")}
className="bg-gray-100 px-4 py-1 rounded-full text-sm"
>
Mixed
</button>

<button
onClick={()=>setFilter("individual")}
className="bg-gray-100 px-4 py-1 rounded-full text-sm"
>
Individual
</button>

</div>

<p className="text-sm mb-2">
Price Range
</p>

<input
type="range"
min="0"
max="2000"
value={maxPrice}
onChange={(e)=>setMaxPrice(Number(e.target.value))}
className="w-full mb-2"
/>

<div className="flex justify-between text-sm">
<span>₹0</span>
<span>₹{maxPrice}</span>
</div>

</div>

{/* PRODUCTS */}

<div className="md:col-span-3 grid md:grid-cols-3 gap-6">

{filteredProducts.map(product=>(

<div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

<img
src={product.image}
className="w-full h-56 object-cover"
/>

<div className="p-4">

<h3 className="font-semibold">
{product.title}
</h3>

<p className="text-gray-500 text-sm mt-1">
{product.description}
</p>

<div className="flex items-center justify-between mt-4">

<p className="text-green-600 font-bold">
₹{product.price}
</p>

<button
onClick={()=>{
addToCart({
id:product.id,
name:product.title,
price:product.price,
image:product.image
},product.description)

toast.success("Product added to cart successfully 🌱")
}}
className="bg-green-600 text-white px-4 py-2 rounded-lg"
>
Add
</button>

</div>

</div>

</div>

))}

</div>

</div>

</>
)

}