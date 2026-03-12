import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description?: string | null;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem,"quantity">,description?:string)=>Promise<void>;
  increaseQty:(id:string)=>Promise<void>;
  decreaseQty:(id:string)=>Promise<void>;
  removeFromCart:(id:string)=>Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {

const [cartItems,setCartItems] = useState<CartItem[]>([]);

useEffect(() => {

loadCart();

const { data: listener } = supabase.auth.onAuthStateChange(() => {
  loadCart();
});

return () => {
  listener.subscription.unsubscribe();
};

}, []);

async function loadCart(){

const { data:{ user } } = await supabase.auth.getUser();
if(!user) return;

const { data } = await supabase
.from("cart")
.select("*")
.eq("user_id",user.id);

if(data){
setCartItems(
data.map((item:any)=>({
id:item.product_id,
name:item.name,
price:item.price,
image:item.image,
quantity:item.quantity,
description:item.description
}))
);
}

}

const addToCart = async(item:Omit<CartItem,"quantity">,description?:string)=>{

const { data:{ user } } = await supabase.auth.getUser();
if(!user) return;

const existing = cartItems.find(p=>p.id===item.id);

if(existing){

await supabase
.from("cart")
.update({quantity:existing.quantity+1})
.eq("user_id",user.id)
.eq("product_id",item.id);

setCartItems(prev =>
prev.map(p =>
p.id===item.id
?{...p,quantity:p.quantity+1}
:p
)
);

}else{

await supabase.from("cart").insert([
{
user_id:user.id,
product_id:item.id,
name:item.name,
price:item.price,
image:item.image,
quantity:1,
description
}
]);

setCartItems(prev => [...prev,{...item,quantity:1,description}]);

}

};

const increaseQty = async(id:string)=>{

const { data:{ user } } = await supabase.auth.getUser();
if(!user) return;

const item = cartItems.find(p=>p.id===id);
if(!item) return;

await supabase
.from("cart")
.update({quantity:item.quantity+1})
.eq("user_id",user.id)
.eq("product_id",id);

setCartItems(prev =>
prev.map(p =>
p.id===id
?{...p,quantity:p.quantity+1}
:p
)
);

};

const decreaseQty = async(id:string)=>{

const { data:{ user } } = await supabase.auth.getUser();
if(!user) return;

const item = cartItems.find(p=>p.id===id);
if(!item) return;

if(item.quantity===1){

await supabase
.from("cart")
.delete()
.eq("user_id",user.id)
.eq("product_id",id);

setCartItems(prev => prev.filter(p=>p.id!==id));

}else{

await supabase
.from("cart")
.update({quantity:item.quantity-1})
.eq("user_id",user.id)
.eq("product_id",id);

setCartItems(prev =>
prev.map(p =>
p.id===id
?{...p,quantity:p.quantity-1}
:p
)
);

}

};

const removeFromCart = async(id:string)=>{

const { data:{ user } } = await supabase.auth.getUser();
if(!user) return;

await supabase
.from("cart")
.delete()
.eq("user_id",user.id)
.eq("product_id",id);

setCartItems(prev => prev.filter(p=>p.id!==id));

};

return(

<CartContext.Provider value={{
cartItems,
addToCart,
increaseQty,
decreaseQty,
removeFromCart
}}>
{children}
</CartContext.Provider>

);

};

export const useCart = ()=>{
const context = useContext(CartContext);
if(!context) throw new Error("useCart must be used inside CartProvider");
return context;
};
