import { Link } from "react-router-dom";
import { Package, Truck, Sprout, Medal, ShieldCheck, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";


export default function Home() {
  const { addToCart } = useCart();
  return (
    <>
     <Navbar />
      <section className="bg-[#f5f7f4] py-16 px-6 md:px-10">

<div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

{/* LEFT CONTENT */}

<div>

<div className="bg-green-100 text-green-700 px-4 py-1 inline-block rounded-full text-sm mb-6">
🌱 100% Organic & Chemical Free
</div>

<h1 className="text-4xl md:text-5xl font-bold leading-tight">
Grow Fresh <br/>
<span className="text-green-600">Organic Vegetables</span> <br/>
at Home
</h1>

<p className="text-gray-600 mt-6 max-w-lg">
Start your kitchen garden journey with premium quality seedling trays.
Perfect for beginners, space-efficient, and incredibly rewarding.
</p>

{/* BUTTONS */}

<div className="flex flex-wrap gap-4 mt-8">

<Link to="/shop">
<button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
Shop Mixed Trays →
</button>
</Link>

<Link to="/Shop">
<button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
Shop Individual Trays
</button>
</Link>

<Link to="/build-tray">
<button className="bg-[#a17852] text-white px-6 py-3 rounded-lg hover:bg-[#8d6543]">
Build Your Tray
</button>
</Link>

</div>

{/* STATS */}

<div className="flex gap-12 mt-10">

<div>
<h3 className="text-green-600 font-bold text-xl">50K+</h3>
<p className="text-gray-500 text-sm">Plants Sold</p>
</div>

<div>
<h3 className="text-green-600 font-bold text-xl">5K+</h3>
<p className="text-gray-500 text-sm">Happy Customers</p>
</div>

<div>
<h3 className="text-green-600 font-bold text-xl">4.8★</h3>
<p className="text-gray-500 text-sm">Average Rating</p>
</div>

</div>

</div>



{/* RIGHT IMAGE */}

<div className="relative">

<img
src="https://images.unsplash.com/photo-1611511449908-4835bf24a62c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R1JFRU4lMjBWRUdFVEFCTEUlMjBHQVJERU58ZW58MHx8MHx8fDA%3D"
className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
alt="Organic vegetable plants"
/>

<div className="absolute bottom-6 left-6 bg-white px-4 py-3 rounded-xl shadow">

<p className="text-green-600 font-semibold">
🌱 100% Organic
</p>

<p className="text-gray-500 text-sm">
Chemical Free
</p>

</div>

</div>

</div>

</section>
      {/* FEATURED MIXED TRAYS */}
   {/* FEATURED MIXED TRAYS */}

<section className="py-16 px-10">

<h2 className="text-3xl font-bold text-center">
Featured Mixed Trays
</h2>

<p className="text-center text-gray-500 mt-2 mb-10">
Curated combinations of vegetables perfect for home gardens
</p>

<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-xl shadow hover:shadow-lg">

<img
src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
className="rounded-t-xl w-full h-72 object-cover"
/>

<div className="p-4">

<h3 className="font-semibold text-lg">
Kitchen Garden Starter Pack
</h3>

<p className="text-green-600 font-bold mt-2">
₹499
</p>

<button
onClick={() =>
  addToCart({
    id: "3",
    name: "Kitchen Garden Starter Pack",
    price: 499,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
  })
}
className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
Add to Cart
</button>

</div>

</div>

<div className="bg-white rounded-xl shadow hover:shadow-lg">

<img
src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119"
className="rounded-t-xl w-full h-72 object-cover"
/>

<h3 className="font-semibold text-lg">
Premium veggie mix
</h3>

<p className="text-green-600 font-bold mt-2">
₹399
</p>

<button
onClick={() =>
  addToCart({
    id: "1",
    name: "Premium Veggie Mix",
    price: 399,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119"
  })
}
className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
Add to Cart
</button>

</div>

</div>

</section>



{/* HOW IT WORKS */}


<section className="bg-green-50 py-16 px-10">

      <h2 className="text-3xl font-bold text-center">
        How It Works
      </h2>

      <p className="text-center text-gray-500 mb-10">
        From selection to harvest in 4 simple steps
      </p>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
            <Package className="text-green-600" size={28}/>
          </div>
          <h3 className="font-semibold">Choose Your Tray</h3>
          <p className="text-sm text-gray-500 mt-2">
            Select from mixed, individual or custom tray
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
            <Truck className="text-green-600" size={28}/>
          </div>
          <h3 className="font-semibold">We Deliver</h3>
          <p className="text-sm text-gray-500 mt-2">
            Healthy plants delivered to your doorstep
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
            <Sprout className="text-green-600" size={28}/>
          </div>
          <h3 className="font-semibold">Plant & Grow</h3>
          <p className="text-sm text-gray-500 mt-2">
            Follow our simple guides to care for plants
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
            <Medal className="text-green-600" size={28}/>
          </div>
          <h3 className="font-semibold">Harvest Fresh</h3>
          <p className="text-sm text-gray-500 mt-2">
            Enjoy organic vegetables from your garden
          </p>
        </div>

      </div>
    </section>
  



{/* INDIVIDUAL CROP TRAYS */}

<section className="py-16 px-10">

<h2 className="text-3xl font-bold text-center">
Individual Crop Trays
</h2>

<p className="text-center text-gray-500 mt-2 mb-10">
Single vegetable trays for focused growing
</p>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{/* TOMATO */}

<div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

<div className="relative">

<img
src="https://images.unsplash.com/photo-1632562386262-44d41eab524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9tYXRvJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
className="w-full h-72 object-cover"
/>

<span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
Beginner Friendly
</span>

<span className="absolute top-3 right-3 bg-white text-green-600 text-xs px-3 py-1 rounded-full shadow">
🌱 Organic
</span>

</div>

<div className="p-4">

<h3 className="font-semibold text-lg">
Tomato Plants Tray
</h3>

<p className="text-sm text-gray-500 mt-1">
50 healthy tomato plants ready to transplant
</p>

<p className="text-sm text-gray-500 mt-2">
⭐ 4.9 (342 reviews)
</p>

<p className="text-xs text-gray-500 mt-2">
☀️ Full Sun • ⏱ 60-85 days
</p>

<div className="flex justify-between items-center mt-4">

<span className="text-green-600 font-bold text-lg">
₹599
</span>

<button
onClick={() =>
addToCart({
id:"4",
name:"Tomato Plants Tray",
price:599,
image:"https://images.unsplash.com/photo-1632562386262-44d41eab524b"
})
}
className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
>
+ Add
</button>

</div>

</div>

</div>


{/* BRINJAL */}

<div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

<div className="relative">

<img
src="https://www.shutterstock.com/image-photo/bringles-flowers-on-plant-kitchen-600nw-2444768345.jpg"
className="w-full h-72 object-cover"
/>

<span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
Beginner Friendly
</span>

<span className="absolute top-3 right-3 bg-white text-green-600 text-xs px-3 py-1 rounded-full shadow">
🌱 Organic
</span>

</div>

<div className="p-4">

<h3 className="font-semibold text-lg text-green-600">
Brinjal Plants Tray
</h3>

<p className="text-sm text-gray-500 mt-1">
50 strong brinjal plants for your garden
</p>

<p className="text-sm text-gray-500 mt-2">
⭐ 4.8 (287 reviews)
</p>

<p className="text-xs text-gray-500 mt-2">
☀️ Full Sun • ⏱ 70-90 days
</p>

<div className="flex justify-between items-center mt-4">

<span className="text-green-600 font-bold text-lg">
₹499
</span>

<button
onClick={() =>
addToCart({
id: "5",
name: "Brinjal Plants Tray",
price: 499,
image: "https://www.shutterstock.com/image-photo/bringles-flowers-on-plant-kitchen-600nw-2444768345.jpg"
})
}
className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
>
+ Add
</button>

</div>

</div>

</div>


{/* CHILLI */}

<div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">

<div className="relative">

<img
src="https://media.istockphoto.com/id/1316992167/photo/red-chili-peppers-in-vegetable-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=s32BjtHu8M2JkSDeJ4m7Sf3CZPo1fjL9C6qr331wyPc="
className="w-full h-72 object-cover"
/>

<span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
Beginner Friendly
</span>

<span className="absolute top-3 right-3 bg-white text-green-600 text-xs px-3 py-1 rounded-full shadow">
🌱 Organic
</span>

</div>

<div className="p-4">

<h3 className="font-semibold text-lg">
Chili Plants Tray
</h3>

<p className="text-sm text-gray-500 mt-1">
50 chili plants for spice lovers
</p>

<p className="text-sm text-gray-500 mt-2">
⭐ 4.8 (421 reviews)
</p>

<p className="text-xs text-gray-500 mt-2">
☀️ Full Sun • ⏱ 75-90 days
</p>

<div className="flex justify-between items-center mt-4">

<span className="text-green-600 font-bold text-lg">
₹749
</span>

<button
onClick={() =>
addToCart({
id: "10",
name: "Chili Plants Tray",
price: 749,
image: "https://media.istockphoto.com/id/1316992167/photo/red-chili-peppers-in-vegetable-garden.webp"
})
}
className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
>
+ Add
</button>

</div>

</div>

</div>
</div>   {/* CLOSE GRID */}
</section>




<section className="bg-gray-100 py-16 px-10">

<h2 className="text-3xl font-bold text-center mb-12">
Why Choose GreenTray?
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{/* CARD 1 */}

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

<div className="w-10 h-10 flex items-center justify-center text-green-600 mb-4">
<ShieldCheck size={32} />
</div>

<h3 className="font-semibold text-lg">
Chemical Free
</h3>

<p className="text-sm text-gray-500 mt-2">
100% organic plants grown without any harmful chemicals
</p>

</div>


{/* CARD 2 */}

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

<div className="w-10 h-10 flex items-center justify-center text-green-600 mb-4">
<Sprout size={32} />
</div>

<h3 className="font-semibold text-lg">
Beginner Friendly
</h3>

<p className="text-sm text-gray-500 mt-2">
Perfect for first-time gardeners with easy care guides
</p>

</div>


{/* CARD 3 */}

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

<div className="w-10 h-10 flex items-center justify-center text-green-600 mb-4">
<TrendingUp size={32} />
</div>

<h3 className="font-semibold text-lg">
Cost Effective
</h3>

<p className="text-sm text-gray-500 mt-2">
Grow your own vegetables and save on grocery bills
</p>

</div>

</div>

</section>


{/* LEARN VIDEO */}

<section className="py-16 px-10 text-center">

<h2 className="text-3xl font-bold">
Learn How to Grow
</h2>

<p className="text-gray-500 mb-10">
Watch our comprehensive video guide on kitchen gardening
</p>

<div className="max-w-4xl mx-auto">

<img
src="/images/garden.png"
className="w-full h-[420px] object-cover rounded-2xl border-2 border-black shadow-xl hover:shadow-2xl transition duration-300"
/>
</div>

</section>



{/* FOOTER */}

<footer className="bg-[#0f172a] text-white py-12 px-10">

<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

<div>
<h3 className="text-green-400 font-bold text-xl mb-3">
GreenTray
</h3>
<p className="text-gray-400 text-sm">
Growing organic vegetables at home has never been easier.
</p>
</div>

<div>
<h4 className="font-semibold mb-3">Quick Links</h4>
<ul className="text-gray-400 space-y-2 text-sm">
<li>Shop All</li>
<li>Custom Tray Builder</li>
<li>Growing Guides</li>
<li>Blog</li>
<li>About Us</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-3">Customer Service</h4>
<ul className="text-gray-400 space-y-2 text-sm">
<li>My Account</li>
<li>Track Order</li>
<li>Shipping Policy</li>
<li>Return Policy</li>
<li>Contact Us</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-3">Get in Touch</h4>
<p className="text-gray-400 text-sm">
123 Green Street, Eco City
</p>
<p className="text-gray-400 text-sm">
+91 98765 43210
</p>
<p className="text-gray-400 text-sm">
hello@greentray.com
</p>
</div>

</div>

<div className="text-center text-gray-500 text-sm mt-10">
© 2026 GreenTray. All rights reserved.
</div>

</footer>

    </>
  );
}