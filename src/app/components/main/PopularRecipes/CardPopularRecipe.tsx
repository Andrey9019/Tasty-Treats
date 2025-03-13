// import Link from "next/link";

import Image from "next/image";

interface RecipeProps {
  _id: string;
  title: string;
  description: string;
  preview: string;
}

export default function CardPopularRecipe({
  _id,
  title,
  description,
  preview,
}: RecipeProps) {
  return (
    <li className="flex items-start space-x-4" data-id={_id}>
      <Image
        src={preview}
        alt={title}
        width={64}
        height={64}
        className="w-16 h-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h4 className="text-sm font-semibold uppercase mb-2">{title}</h4>
        <p className="text-xs text-gray line-clamp-2">{description}</p>
      </div>
    </li>
  );
}
