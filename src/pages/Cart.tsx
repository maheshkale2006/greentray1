import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function Cart() {

const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

const total = cartItems.reduce(
(sum,item)=> sum + item.price * item.quantity,
0
);

return(
<>
<Navbar/>

<div className="max-w-7xl mx-auto px-6 py-10">

<h1 className="text-3xl font-bold mb-8">
Shopping Cart
</h1>


{cartItems.length === 0 ? (

<div className="text-center py-20">

<div className="text-gray-400 text-6xl mb-4">
🛍️
</div>

<h2 className="text-xl font-semibold">
Your cart is empty
</h2>

<p className="text-gray-500 mt-2">
Add some plants to get started!
</p>

<Link
to="/shop"
className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
>
Continue Shopping
</Link>

</div>

) : (

<div className="grid md:grid-cols-3 gap-8">

{/* CART ITEMS */}

<div className="md:col-span-2 space-y-6">

{cartItems.map((item)=>(

<div
key={item.id}
className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
>

<div className="flex items-center gap-4">

<img
src={item.image}
className="w-20 h-20 rounded-lg object-cover"
/>

<div>

<h3 className="font-semibold">
{item.name}
</h3>

{/* DESCRIPTION */}
{item.description && (
<p className="text-sm text-gray-500">
{item.description}
</p>
)}

<p className="text-green-600 font-bold mt-1">
₹{item.price}
</p>

</div>

</div>


<div className="flex items-center gap-4">

<button
onClick={()=>removeFromCart(item.id)}
className="text-red-500"
>
<Trash2 size={18}/>
</button>


<div className="flex items-center border rounded-lg">

<button
onClick={()=>decreaseQty(item.id)}
className="px-3 py-1"
>
-
</button>

<span className="px-3">
{item.quantity}
</span>

<button
onClick={()=>increaseQty(item.id)}
className="px-3 py-1"
>
+
</button>

</div>

</div>

</div>

))}

</div>


{/* SUMMARY */}

<div className="bg-white p-6 rounded-xl shadow h-fit">

<h2 className="font-semibold text-lg mb-4">
Order Summary
</h2>

<div className="flex justify-between text-sm mb-2">

<span>
Subtotal ({cartItems.length} items)
</span>

<span>
₹{total}
</span>

</div>

<div className="flex justify-between text-sm mb-4">

<span>
Shipping
</span>

<span>
Free
</span>

</div>

<hr/>

<div className="flex justify-between font-semibold mt-4 mb-4">

<span>
Total
</span>

<span className="text-green-600">
₹{total}
</span>

</div>

<button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
Proceed to Checkout →
</button>

<Link
to="/shop"
className="block text-center text-sm mt-4 text-gray-500 hover:text-green-600"
>
Continue Shopping
</Link>

</div>

</div>

)}

</div>

</>
);
}

