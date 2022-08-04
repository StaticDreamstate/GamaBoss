import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets";
import { AuthContext } from "../../contexts/AuthContext";
import { linksNav, linksNavDesktop } from "./linksNav";

export default function Header() {
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full h-14 shadow-md flex items-center justify-center md:justify-between px-3">
      <button
        className="absolute left-3 text-3xl md:hidden"
        onClick={() => setOpen(!open)}
      >
        <img className="w-5" src={icons.iconMenu} alt="Icone de menu" />
      </button>
      <button
        onClick={() => navigate("/perfil")}
        className="font-600 text-mobile-size-24px leading-mobile-line-26.4px text-primary-blue-1 mx-3"
      >
        PetPlan
      </button>
      <nav>
        <ul className="md:flex hidden items-center gap-8">
          {linksNavDesktop.map((link, index) => (
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
          className={`flex flex-col justify-between flex-1 md:hidden bg-white fixed w-4/5 top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 z-50 border border-r-primary-blue-1 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <div>
            <button
              className="text-3xl px-3 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <img
                className="w-5 absolute top-4"
                src={icons.iconClose}
                alt="Icone de menu"
              />
            </button>
            {linksNav.map((link, index) => (
              <li key={link.name + index}>
                <Link
                  onClick={() => setOpen(!open)}
                  to={link.redirect}
                  className="font-400 text-mobile-size-16px font-libre my-3 px-3 inline-block hover:text-primary-blue-1 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="flex flex-col">
            <Link
              to={"#"}
              className="font-400 text-mobile-size-16px font-libre my-3 px-3 inline-block hover:text-primary-blue-1 transition-colors"
            >
              Configurações
            </Link>
            <button
              onClick={logout}
              className="font-400 text-mobile-size-16px text-start font-libre my-3 px-3 inline-block hover:text-primary-blue-1 transition-colors"
            >
              Sair
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}
