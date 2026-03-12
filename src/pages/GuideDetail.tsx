import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Guide = {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  harvest_time?: string;
  sunlight?: string;
  water?: string;
  fertilizer?: string;
  pest_control?: string;
  video_url?: string;
};

export default function GuideDetail() {

  const { id } = useParams();
  const [guide, setGuide] = useState<Guide | null>(null);

  useEffect(() => {
    fetchGuide();
  }, []);

  async function fetchGuide() {
    const { data } = await supabase
      .from("guides")
      .select("*")
      .eq("id", id)
      .single();

    setGuide(data);
  }

  if (!guide) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Back Button */}
      <Link
        to="/learn"
        className="text-green-600 font-semibold text-sm"
      >
        ← Back to Guides
      </Link>

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 mt-4">

        {/* IMAGE */}
        <img
          src={guide.image}
          className="rounded-xl w-full h-[420px] object-cover"
        />

        {/* INFO */}
        <div>

          <h1 className="text-3xl font-bold">
            {guide.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {guide.description}
          </p>

          {/* PRICE + HARVEST */}
          <div className="flex gap-6 mt-6">

            <div className="bg-gray-100 rounded-lg px-5 py-3 w-44">
              <p className="text-sm text-gray-500">
                Price per Plant
              </p>

              <p className="text-green-600 font-bold text-lg">
                ₹{guide.price}
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg px-5 py-3 w-44">
              <p className="text-sm text-gray-500">
                Harvest Time
              </p>

              <p className="font-semibold">
                {guide.harvest_time}
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CARE GUIDE */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-gray-100 rounded-xl p-5 flex gap-3 items-start">
          <span className="text-yellow-500 text-xl">☀</span>
          <div>
            <p className="font-semibold">Sunlight Requirement</p>
            <p className="text-sm text-gray-600">{guide.sunlight}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-5 flex gap-3 items-start">
          <span className="text-blue-500 text-xl">💧</span>
          <div>
            <p className="font-semibold">Water Requirement</p>
            <p className="text-sm text-gray-600">{guide.water}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-5 flex gap-3 items-start">
          <span className="text-green-600 text-xl">🌱</span>
          <div>
            <p className="font-semibold">Fertilizer Guide</p>
            <p className="text-sm text-gray-600">{guide.fertilizer}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-5 flex gap-3 items-start">
          <span className="text-red-500 text-xl">🛡</span>
          <div>
            <p className="font-semibold">Pest Control</p>
            <p className="text-sm text-gray-600">{guide.pest_control}</p>
          </div>
        </div>

      </div>

      {/* VIDEO SECTION */}
      <div className="mt-12 bg-gray-100 rounded-xl p-6">

        <h2 className="text-lg font-semibold mb-4">
          Video Tutorial
        </h2>

        <iframe
          className="w-full h-[420px] rounded-lg"
          src={guide.video_url}
          allowFullScreen
        />

      </div>

    </div>
  );
}