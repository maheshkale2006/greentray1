import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Contact(){

const [form,setForm] = useState({
first:"",
last:"",
email:"",
phone:"",
subject:"",
message:""
});

function handleChange(e:any){
setForm({...form,[e.target.name]:e.target.value});
}

async function sendMessage(e:any){
e.preventDefault();

const { error } = await supabase
.from("contact_messages")
.insert([
{
first_name: form.first,
last_name: form.last,
email: form.email,
phone: form.phone,
subject: form.subject,
message: form.message
}
]);

if(error){
console.log(error);
alert("Message failed");
}else{
alert("Message sent successfully");

setForm({
first:"",
last:"",
email:"",
phone:"",
subject:"",
message:""
});
}
}

return(
<>
<Navbar/>

{/* HEADER */}

<section className="bg-green-600 text-white py-16 px-10">

<h1 className="text-3xl font-bold">
Contact Us
</h1>

<p className="text-green-100 mt-2">
We'd love to hear from you
</p>

</section>


{/* CONTACT SECTION */}

<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">


{/* LEFT SIDE */}

<div>

<h2 className="text-xl font-semibold mb-4">
Get In Touch
</h2>

<p className="text-gray-500 mb-6">
Have questions about our products or need help with your garden? Our team is here to help you grow!
</p>


{/* ADDRESS */}

<div className="flex gap-4 mb-6">

<div className="bg-green-100 p-3 rounded-lg">
<MapPin className="text-green-600"/>
</div>

<div>

<h4 className="font-semibold">
Address
</h4>

<p className="text-sm text-gray-500">
123 Green Street ,Newasa Road,Shrirampur
<br/>
India
</p>

</div>

</div>


{/* PHONE */}

<div className="flex gap-4 mb-6">

<div className="bg-green-100 p-3 rounded-lg">
<Phone className="text-green-600"/>
</div>

<div>

<h4 className="font-semibold">
Phone
</h4>

<p className="text-sm text-gray-500">
+91 8080956639
</p>

</div>

</div>


{/* EMAIL */}

<div className="flex gap-4 mb-6">

<div className="bg-green-100 p-3 rounded-lg">
<Mail className="text-green-600"/>
</div>

<div>

<h4 className="font-semibold">
Email
</h4>

<p className="text-sm text-gray-500">
kale@greentray.com
</p>

</div>

</div>


{/* BUSINESS HOURS */}

<div className="bg-green-50 p-6 rounded-xl mt-6">

<h3 className="font-semibold mb-3">
Business Hours
</h3>

<p className="text-sm text-gray-600">
Monday - Friday: 9:00 AM - 6:00 PM
</p>

<p className="text-sm text-gray-600">
Saturday: 10:00 AM - 4:00 PM
</p>

<p className="text-sm text-gray-600">
Sunday: Closed
</p>

</div>

</div>



{/* CONTACT FORM */}

<form
onSubmit={sendMessage}
className="bg-white p-6 rounded-xl shadow"
>

<h2 className="text-lg font-semibold mb-4">
Send us a Message
</h2>

<div className="grid grid-cols-2 gap-4 mb-4">

<input
name="first"
value={form.first}
placeholder="First Name"
onChange={handleChange}
className="border rounded-lg px-3 py-2"
/>

<input
name="last"
value={form.last}
placeholder="Last Name"
onChange={handleChange}
className="border rounded-lg px-3 py-2"
/>

</div>


<input
name="email"
value={form.email}
placeholder="Email"
onChange={handleChange}
className="border rounded-lg px-3 py-2 w-full mb-4"
/>


<input
name="phone"
value={form.phone}
placeholder="Phone"
onChange={handleChange}
className="border rounded-lg px-3 py-2 w-full mb-4"
/>


<input
name="subject"
value={form.subject}
placeholder="Subject"
onChange={handleChange}
className="border rounded-lg px-3 py-2 w-full mb-4"
/>


<textarea
name="message"
value={form.message}
placeholder="Message"
onChange={handleChange}
className="border rounded-lg px-3 py-2 w-full mb-4"
/>


<button
type="submit"
className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
Send Message
</button>

</form>

</div>


{/* GOOGLE MAP */}

<div className="max-w-7xl mx-auto px-6 pb-16">

<iframe
src="https://maps.google.com/maps?q=https://maps.app.goo.gl/AnLLe3vJVQPhHpoPA&output=embed"
className="w-full h-[350px] rounded-xl border"
loading="lazy"
/>

</div>

</>
)

}