import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-center text-sm sm:text-xl flex flex-wrap">
            <span>Arun</span>
            <span>Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>

        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-600">Home</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-600">Sign In</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-600">About</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
