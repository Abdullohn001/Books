import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-white text-2xl font-bold">MyBrand</div>
        </Link>

        <div className="space-x-4">
          <Link
            className="text-gray-300 hover:text-white transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition duration-300"
            href="/about"
          >
            Books
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
