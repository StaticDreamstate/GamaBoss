import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets";
import { AuthContext } from "../../contexts/AuthContext";
import { linksNav } from "./linksNav";

export default function Header() {
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white w-screen h-14 shadow-md flex items-center justify-between px-6">
      <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        <img className="w-5" src={icons.iconMenu} alt="Icone de menu" />
      </button>
      <h1 className="font-600 text-mobile-size-24px leading-mobile-line-26.4px text-primary-blue-1">
        NomePlano
      </h1>
      <nav>
        <ul className="md:flex hidden items-center gap-8">
          {linksNav.map((link, index) => (
            <li key={link.name + index}>
              <Link
                to={link.redirect}
                className="px-3 inline-block hover:text-primary-blue-1 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={`md:hidden bg-white fixed w-2/3 top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 z-50 border border-r-primary-blue-1 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <img
              className="w-5 absolute top-4"
              src={icons.iconClose}
              alt="Icone de menu"
            />
          </button>
          {linksNav.map((link, index) => (
            <li key={link.name + index}>
              <Link
                to={link.redirect}
                className="my-3 px-3 inline-block hover:text-primary-blue-1 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            onClick={logout}
            className="my-3 px-3 inline-block hover:text-primary-blue-1 transition-colors"
          >
            Sair
          </button>
        </ul>
      </nav>
    </header>
  );
}
