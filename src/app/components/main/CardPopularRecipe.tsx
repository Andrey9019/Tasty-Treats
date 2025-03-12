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
    <li
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      data-id={_id}
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={preview}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </li>
  );
}
