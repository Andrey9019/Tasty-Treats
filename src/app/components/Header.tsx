import Link from "next/link";
import { FaShoppingCart, FaHamburger } from "react-icons/fa";
const Header = () => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <nav className="hidden md:flex gap-6">
          <ul className="flex gap-6">
            <li>
              <Link
                href="./"
                className="text-sm  hover:text-primary font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <a href="./" className="text-sm  hover:text-primary">
                Favorites
              </a>
            </li>
          </ul>
        </nav>

        <Link href="./" className="text-lg font-semibold">
          <p>
            <span className="text-primary ">Tasty</span>
            <span className="text-black"> Treats</span>
          </p>
        </Link>

        <div className="flex gap-4">
          <button className="p-2 bg-transparent border-none cursor-pointer">
            <FaShoppingCart />
          </button>

          <button className="p-2 bg-transparent border-none cursor-pointer md:hidden">
            <FaHamburger />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
