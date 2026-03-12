import Navbar from "../components/Navbar";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

const navigate = useNavigate();

const [user,setUser] = useState<any>(null);
const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [editing,setEditing] = useState(false);
const [orders,setOrders] = useState(0);

useEffect(()=>{
loadUser();
},[]);


async function loadUser(){

const { data:{ user } } = await supabase.auth.getUser();

if(!user){
navigate("/auth");
return;
}

setUser(user);

const { data } = await supabase
.from("profiles")
.select("*")
.eq("id",user.id)
.single();

if(data){
setName(data.name || "");
setPhone(data.phone || "");
}

const { count } = await supabase
.from("orders")
.select("*",{count:"exact",head:true})
.eq("user_id",user.id);

setOrders(count || 0);

}


async function saveProfile(){

if(!user) return;

await supabase.from("profiles").upsert({
id:user.id,
name,
phone
});

setEditing(false);

alert("Profile updated");

}


async function handleLogout(){

await supabase.auth.signOut();

navigate("/auth");

}


return(
<>
<Navbar/>

<div className="max-w-7xl mx-auto px-6 py-10">

<h1 className="text-3xl font-bold mb-6">
My Dashboard
</h1>

<div className="grid md:grid-cols-4 gap-6">


{/* LEFT MENU */}

<div className="bg-white rounded-xl shadow p-4">

<ul className="space-y-4 text-sm">

<li className="bg-green-100 text-green-700 px-3 py-2 rounded-lg">
👤 Profile
</li>

<li className="cursor-pointer hover:text-green-600">
📦 My Orders
</li>

<li className="cursor-pointer hover:text-green-600">
📍 Addresses
</li>

<li className="cursor-pointer hover:text-green-600">
❤️ Wishlist
</li>

<li
className="text-red-500 cursor-pointer"
onClick={handleLogout}
>
↪ Logout
</li>

</ul>

</div>


{/* PROFILE INFO */}

<div className="md:col-span-3 space-y-6">

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-lg font-semibold mb-4">
Profile Information
</h2>

<div className="space-y-4">

<div>

<label className="text-sm text-gray-500">
Name
</label>

{editing ? (

<input
value={name}
onChange={(e)=>setName(e.target.value)}
className="border rounded-lg px-3 py-2 w-full"
/>

) : (

<p>{name || "Not set"}</p>

)}

</div>


<div>

<label className="text-sm text-gray-500">
Email
</label>

<p>{user?.email}</p>

</div>


<div>

<label className="text-sm text-gray-500">
Phone
</label>

{editing ? (

<input
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="border rounded-lg px-3 py-2 w-full"
/>

) : (

<p>{phone || "Not set"}</p>

)}

</div>


{editing ? (

<button
onClick={saveProfile}
className="bg-green-600 text-white px-4 py-2 rounded-lg"
>
Save
</button>

) : (

<button
onClick={()=>setEditing(true)}
className="bg-green-600 text-white px-4 py-2 rounded-lg"
>
Edit Profile
</button>

)}

</div>

</div>


{/* STATS */}

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl shadow p-6 text-center">

<h3 className="text-green-600 text-2xl font-bold">
{orders}
</h3>

<p className="text-sm text-gray-500">
Total Orders
</p>

</div>


<div className="bg-white rounded-xl shadow p-6 text-center">

<h3 className="text-green-600 text-2xl font-bold">
0
</h3>

<p className="text-sm text-gray-500">
In Progress
</p>

</div>


<div className="bg-white rounded-xl shadow p-6 text-center">

<h3 className="text-green-600 text-2xl font-bold">
0
</h3>

<p className="text-sm text-gray-500">
Wishlist Items
</p>

</div>

</div>

</div>

</div>

</div>

</>
);

}