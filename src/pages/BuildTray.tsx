import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../lib/supabase"
import { useCart } from "../context/CartContext"

type Plant = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function BuildTray() {

  const [plants, setPlants] = useState<Plant[]>([])
  const [cart, setCart] = useState<{ [key: string]: number }>({})

  const { addToCart } = useCart()

  useEffect(() => {
    loadPlants()
  }, [])

  async function loadPlants() {
    const { data } = await supabase
      .from("plants")
      .select("*")

    if (data) setPlants(data)
  }

  // TOTAL PLANTS
  const totalPlants = Object.values(cart).reduce((a, b) => a + b, 0)

  // TOTAL PRICE
  const totalPrice = plants.reduce((total, p) => {
    return total + (cart[p.id] || 0) * p.price
  }, 0)

  // INCREASE
  function increase(id: string) {

    if (totalPlants >= 70) {
      alert("Maximum 70 plants allowed in tray")
      return
    }

    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  // DECREASE
  function decrease(id: string) {
    setCart(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }))
  }

  // ADD TO CART
async function handleAddToCart(){

if(totalPlants !== 70){
alert("You must select exactly 70 plants to build a tray")
return
}

let description=""

plants.forEach(p=>{
const qty = cart[p.id]

if(qty>0){
description += `${p.name} (${qty}), `
}
})

description = description.slice(0,-2)

await addToCart(
{
id:"999",
name:"Custom Tray",
price:totalPrice,
image:"/tray.png"
},
description
)

alert("Tray added to cart successfully 🌱")

setCart({})
}

  return (

    <div>

      <Navbar />

      {/* HEADER */}

      <div className="bg-green-600 text-white py-12 px-10">

        <h1 className="text-4xl font-bold">
          Build Your Custom Tray
        </h1>

        <p className="mt-2">
          Select your favorite vegetables and create your perfect tray
        </p>

      </div>


      <div className="grid grid-cols-3 gap-8 px-10 py-10">

        {/* PLANTS */}

        <div className="col-span-2 grid grid-cols-2 gap-6">

          {plants.map(p => (

            <div key={p.id} className="border rounded-xl p-4 flex gap-4">

              <img
                src={p.image}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">

                <h3 className="font-semibold">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {p.description}
                </p>

                <p className="text-green-600 font-semibold">
                  ₹{p.price}/plant
                </p>

                <div className="flex items-center gap-4 mt-2">

                  <button
                    onClick={() => decrease(p.id)}
                    className="border px-3 rounded"
                  >
                    -
                  </button>

                  <span>
                    {cart[p.id] || 0}
                  </span>

                  <button
                    onClick={() => increase(p.id)}
                    disabled={totalPlants >= 70}
                    className={`border px-3 rounded ${totalPlants >= 70 ? "opacity-40 cursor-not-allowed" : ""
                      }`}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* SUMMARY */}

        <div className="border rounded-xl p-6 h-fit sticky top-10">

          <h2 className="font-bold text-lg">
            Tray Summary
          </h2>

          <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">

            {plants.map(p => {

              const qty = cart[p.id]

              if (!qty) return null

              return (

                <div key={p.id} className="flex justify-between">

                  <span>
                    {p.name} ({qty})
                  </span>

                  <span>
                    ₹{qty * p.price}
                  </span>

                </div>

              )

            })}

          </div>

          <hr className="my-4" />

          {/* COUNTER */}

          <p className={`text-lg ${totalPlants === 70 ? "text-green-600 font-bold" : "text-red-500"}`}>
            Total Plants: {totalPlants} / 70
          </p>

          <p className="font-bold text-green-600 text-xl mt-2">
            Total Price: ₹{totalPrice}
          </p>

          <button
            onClick={handleAddToCart}
            className={`w-full py-2 rounded mt-4 text-white font-semibold 
            ${totalPlants === 70
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  )

}

image:"/tray.png"