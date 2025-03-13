// import Link from "next/link";

type RecipeProps = {
  _id: string;
  title: string;
  description: string;
  preview: string;
};

export default function CardPopularRecipe({
  _id,
  title,
  description,
  preview,
}: RecipeProps) {
  return (
    <li className="flex items-start space-x-4" data-id={_id}>
      <img
        src={preview}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h4 className="text-sm font-semibold uppercase mb-2">{title}</h4>
        <p className="text-xs text-gray line-clamp-2">{description}</p>
      </div>
    </li>
  );
}
