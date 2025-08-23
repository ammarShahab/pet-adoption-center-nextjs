import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function Details({ params }) {
  const p = await params;
  const petCollections = dbConnect("pets");
  const details = await petCollections.findOne({ _id: new ObjectId(p) });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative h-72 md:h-auto">
          <Image
            src={details.image}
            alt={details.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {details.name}
          </h2>
          <p className="text-gray-600 whitespace-pre-line mb-4">
            {details.description}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            Price: ${details.price}
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
