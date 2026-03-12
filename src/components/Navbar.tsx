import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cartItems } = useCart();

const [open,setOpen] = useState(false);

return (

<nav className="bg-white shadow-sm sticky top-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* LOGO */}
<Link to="/" className="flex items-center gap-2">
<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
🌱
</div>
<span className="text-green-600 font-semibold text-lg">
GreenTray
</span>
</Link>


{/* DESKTOP MENU */}
<div className="hidden md:flex items-center gap-8 text-sm font-medium">

<Link to="/" className="text-green-600">Home</Link>
<Link to="/shop" className="hover:text-green-600">Shop</Link>
<Link to="/build-tray">Build Your Tray</Link>
<Link to="/learn">Learn</Link>
<Link to="/blog">Blog</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

</div>


{/* RIGHT ICONS */}
<div className="flex items-center gap-4">

<Link to="/dashboard">
<User className="w-5 h-5 cursor-pointer hidden md:block"/>
</Link>
<div className="relative">

<Link to="/cart">
  <ShoppingCart className="w-5 h-5 cursor-pointer"/>
</Link>

{cartItems.length > 0 && (
<span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
{cartItems.length}
</span>
)}

</div>

{/* MOBILE MENU BUTTON */}
<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>
{open ? <X size={24}/> : <Menu size={24}/>}
</button>

</div>

</div>


{/* MOBILE MENU */}
{open && (

<div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm">

<Link to="/" className="block">Home</Link>
<Link to="/shop" className="block hover:text-green-600">Shop</Link>
<Link to="/build-tray" className="block">Build Your Tray</Link>
<Link to="/learn" className="block">Learn</Link>
<Link to="/blog" className="block">Blog</Link>
<Link to="/about" className="block">About</Link>
<Link to="/contact" className="block">Contact</Link>

</div>

)}

</nav>

);

}