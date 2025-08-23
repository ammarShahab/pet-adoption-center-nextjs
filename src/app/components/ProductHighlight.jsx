// Fake JSON data
/* const pets = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/MDQx7X92/pexels-linda-rusinko-1615451-7483187.jpg",
    name: "Bella",
    description:
      "A gentle Labrador retriever who loves playing fetch.\nFriendly with kids and other pets.\nEnjoys long walks and outdoor fun.\nLooking for a family who loves adventure.",
    price: 120,
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/B2TZZV6N/pexels-oscar-hu-1311877766-33514581.jpg",
    name: "Milo",
    description:
      "A curious little kitten with playful energy.\nLoves chasing string and toy mice.\nVery affectionate and loves cuddles.\nPerfect for anyone looking for a loving lap cat.",
    price: 90,
  },
  {
    id: 3,
    image: "https://placedog.net/500/400?id=2",
    name: "Rocky",
    description:
      "An energetic German Shepherd mix.\nLoyal and protective companion.\nNeeds an active home with space to run.\nGreat for families who enjoy outdoor activities.",
    price: 150,
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/wh0M6HBk/pexels-d-h-j-32884887-11565293-1.jpg",
    name: "Luna",
    description:
      "A sweet Persian cat with silky fur.\nLoves quiet afternoons by the window.\nVery low-maintenance and calm.\nBest suited for a peaceful home environment.",
    price: 110,
  },
  {
    id: 5,
    image: "https://placedog.net/500/400?id=3",
    name: "Charlie",
    description:
      "Playful beagle with a big heart.\nEnjoys sniffing trails and exploring.\nGets along well with other pets.\nPerfect for active families and kids.",
    price: 130,
  },
  {
    id: 6,
    image:
      "https://i.ibb.co.com/Xkj9X0DH/pexels-luo-chris-1659104-15208769-1.jpg",
    name: "Daisy",
    description:
      "Adorable kitten with bright green eyes.\nLoves chasing laser pointers.\nPurrs loudly when held.\nWould thrive in a loving, playful home.",
    price: 95,
  },
  {
    id: 7,
    image: "https://placedog.net/500/400?id=4",
    name: "Max",
    description:
      "Golden Retriever who loves water.\nExtremely friendly and social.\nEnjoys fetching sticks and swimming.\nGreat family dog with lots of love to give.",
    price: 160,
  },
  {
    id: 8,
    image:
      "https://i.ibb.co.com/BVQyTNSr/pexels-alexandros-chatzidimos-2033032-3652805-1.jpg",
    name: "Oliver",
    description:
      "Charming Siamese cat with blue eyes.\nVery vocal and affectionate.\nLoves attention and being around people.\nPerfect for someone looking for companionship.",
    price: 105,
  },
  {
    id: 9,
    image: "https://placedog.net/500/400?id=5",
    name: "Buddy",
    description:
      "Friendly mixed-breed pup with lots of energy.\nLoves car rides and new adventures.\nGets along with other dogs easily.\nBest for a family who enjoys the outdoors.",
    price: 125,
  },
  {
    id: 10,
    image:
      "https://i.ibb.co.com/xKmyWy3G/pexels-semanur-biber-12654341-11597773-2.jpg",
    name: "Chloe",
    description:
      "Calm and affectionate tabby cat.\nEnjoys napping in sunny spots.\nLoves being brushed and pampered.\nIdeal for a cozy home environment.",
    price: 100,
  },
  {
    id: 11,
    image: "https://placedog.net/500/400?id=6",
    name: "Cooper",
    description:
      "Energetic Husky with striking blue eyes.\nLoves running and outdoor play.\nVery intelligent and trainable.\nGreat fit for active and adventurous families.",
    price: 170,
  },
  {
    id: 12,
    image:
      "https://i.ibb.co.com/xKmyWy3G/pexels-semanur-biber-12654341-11597773-2.jpg",
    name: "Sophie",
    description:
      "Gentle kitten who loves quiet cuddles.\nShy at first but warms up quickly.\nEnjoys cozy blankets and sunny naps.\nPerfect for someone looking for a calm pet.",
    price: 85,
  },
]; */

import dbConnect from "@/lib/dbConnect";
import Link from "next/link";

export default async function ProductHighlight() {
  const petCollections = dbConnect("pets");
  const pets = await petCollections.find({}).limit(6).toArray();
  return (
    <section className="py-12 bg-base-100  ">
      <div className="container max-w-7xl mx-auto px-4  mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Picks for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="card bg-gray-200 shadow-2xl rounded-2xl overflow-hidden"
            >
              <figure>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{pet.name}</h3>
                {/*  <p className="text-sm text-gray-600 line-clamp-4">
                  {pet.description}
                </p> */}
                <p className="mt-2 font-semibold text-lg text-primary">
                  Adoption Fee: ${pet.price}
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/details/${pet._id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
