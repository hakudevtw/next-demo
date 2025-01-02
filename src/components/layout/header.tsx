import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-xl font-bold">
          <Link href="/">DEMO</Link>
        </div>

        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link href="/products" className="hover:text-blue-500 transition-colors">
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
