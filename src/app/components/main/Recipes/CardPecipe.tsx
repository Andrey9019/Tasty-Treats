// import Link from "next/link";

import { FaStar } from "react-icons/fa";

import Image from "next/image";

interface CardRecipeProps {
  _id: string;
  title: string;
  description: string;
  rating: number;
  preview: string;
}

export default function CardRecipe({
  _id,
  title,
  description,
  rating,
  preview,
}: CardRecipeProps) {
  return (
    <li className="relative rounded-2xl overflow-hidden" data-id={_id}>
      <Image
        src={preview}
        alt={title}
        className="w-full  object-cover"
        width={335}
        height={335}
      />
      <div className="absolute inset-0 bg-opacity-50 p-4 flex flex-col justify-end text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm truncate">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <span className="text-sm">{rating.toFixed(1)}</span>
            <FaStar className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-1" />
          </div>
          {/* <button className="bg-green-500 text-sm px-3 py-1 rounded-full font-medium">
            See recipe
          </button> */}
        </div>
      </div>
    </li>
  );
}
