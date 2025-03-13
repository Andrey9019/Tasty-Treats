import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col xl:flex-row pl-5 pr-5 ">
      <div className="max-w-[466px]">
        <h1 className="text-2xl uppercase font-semibold mb-3">
          Learn to Cook
          <span className="text-primary italic"> Tasty Treats' </span>
          Customizable Masterclass
        </h1>
        <p className="text-sm max-w-[408px]">
          TastyTreats - Customize Your Meal with Ingredient Options and
          Step-by-Step Video Guides.
        </p>
        <button></button>
      </div>
      <div>слайдер</div>
    </section>
  );
};

export default Hero;
