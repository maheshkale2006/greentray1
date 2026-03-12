import Navbar from "../components/Navbar";
import { Leaf, Heart, Target, Users } from "lucide-react";

export default function About(){

return(
<>
<Navbar/>

{/* HERO */}

<section className="bg-green-600 text-white py-16 text-center">

<h1 className="text-4xl font-bold">
About GreenTray
</h1>

<p className="mt-3 text-green-100">
Empowering homes to grow their own fresh, organic vegetables
</p>

</section>


{/* STORY */}

<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-2xl font-bold mb-4">
Our Story
</h2>

<p className="text-gray-600 mb-4">
GreenTray was born from a simple belief: everyone deserves access to fresh, organic vegetables. In 2026, we started our journey to make home gardening accessible, simple, and rewarding for everyone.
</p>

<p className="text-gray-600 mb-4">
What began as a small nursery has grown into a thriving community of home gardeners across India.
</p>

<p className="text-gray-600">
Today, we're proud to be India's leading provider of organic vegetable seedling trays.
</p>

</div>

<img
src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
className="rounded-xl shadow-lg"
/>

</section>


{/* MISSION VISION VALUES */}

<section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center">

<div className="bg-white shadow rounded-xl p-6">

<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Target className="text-green-600"/>
</div>

<h3 className="font-semibold mb-2">
Our Mission
</h3>

<p className="text-gray-500 text-sm">
To make organic home gardening accessible to every household.
</p>

</div>


<div className="bg-white shadow rounded-xl p-6">

<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Leaf className="text-green-600"/>
</div>

<h3 className="font-semibold mb-2">
Our Vision
</h3>

<p className="text-gray-500 text-sm">
A world where fresh organic vegetables are grown in every home.
</p>

</div>


<div className="bg-white shadow rounded-xl p-6">

<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<Heart className="text-green-600"/>
</div>

<h3 className="font-semibold mb-2">
Our Values
</h3>

<p className="text-gray-500 text-sm">
Quality, sustainability and customer satisfaction guide everything we do.
</p>

</div>

</section>



{/* WHY CHOOSE US */}

<section className="max-w-7xl mx-auto px-6 py-12">

<div className="bg-green-50 rounded-xl p-10">

<h2 className="text-center text-2xl font-bold mb-8">
Why Choose Us?
</h2>

<div className="grid md:grid-cols-2 gap-6 text-sm">

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">100% Organic</h4>
<p className="text-gray-500">
All plants grown without chemicals
</p>
</div>
</div>

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">Expert Support</h4>
<p className="text-gray-500">
Guidance from gardening experts
</p>
</div>
</div>

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">Quality Guaranteed</h4>
<p className="text-gray-500">
Healthy plants or money back
</p>
</div>
</div>

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">Fast Delivery</h4>
<p className="text-gray-500">
Delivery within 2-3 days
</p>
</div>
</div>

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">Beginner Friendly</h4>
<p className="text-gray-500">
Detailed care guides for every plant
</p>
</div>
</div>

<div className="flex gap-3">
<Leaf className="text-green-600"/>
<div>
<h4 className="font-semibold">Sustainable Packaging</h4>
<p className="text-gray-500">
Eco-friendly biodegradable materials
</p>
</div>
</div>

</div>

</div>

</section>



{/* COMMUNITY */}

<section className="max-w-7xl mx-auto px-6 py-16 text-center bg-gray-100 rounded-xl">

<Users className="mx-auto text-green-600 mb-4" size={36}/>

<h2 className="text-2xl font-bold mb-3">
Join Our Growing Community
</h2>

<p className="text-gray-500 mb-8">
Over 5,000 satisfied customers have started their gardening journey with GreenTray.
</p>

<div className="grid md:grid-cols-3 gap-10 text-green-600 font-bold text-xl">

<div>
50K+
<p className="text-gray-500 text-sm">Plants Sold</p>
</div>

<div>
5K+
<p className="text-gray-500 text-sm">Happy Customers</p>
</div>

<div>
4.8★
<p className="text-gray-500 text-sm">Average Rating</p>
</div>

</div>

</section>

</>
)

}