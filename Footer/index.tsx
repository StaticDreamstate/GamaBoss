import { icons } from "../../assets";
import { Link } from "react-router-dom";
import Cartao from "../../assets/images/formasdepagamento.png"
export default function Footer() {
  return (
    <footer className="mt-5 w-screen border-t-2">
      <div className="py-4 sm:flex sm:justify-evenly lg:gap-20">
        <div className="flex justify-evenly sm: sm:gap-20">
          <div className="p-3">
            <h2 className=" text-base font-semibold fontFamily">
              Institucional
            </h2>
            <ul>
              <li className="mt-2 ">
                <Link to="/Home">Sobre</Link>
              </li>
              <li className="mt-2 ">
                <Link to="/Home">Seja um parceiro</Link>
              </li>
              <li className="mt-2 ">
                <Link to="/Home">Rede credenciada</Link>
              </li>
            </ul>
          </div>
          <div className="p-3 mx-4">
            <h2 className=" font-semibold">Planos</h2>
            <ul>
              <li className="mt-2 ">
                <Link to="/Home">Nossos planos</Link>
              </li>
              <li className="mt-2 ">
                <Link to="/Home">Como adicionar serviços</Link>
              </li>
              <li className="mt-2 ">
                <Link to="/Home">Contrato dos planos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 flex flex-col ">
        <h2 className=" font-semibold flex justify-center ">Formas de pagamento</h2>
        <img src={Cartao} alt="Imagem de cartão" />
        </div>
        <div>
          <h2 className="text-center sm:text-left mt-3 text-base font-semibold">
            Nos acompanhe
          </h2>
          <div className="flex gap-5 justify-center mt-3">
            <a
              href="#"
              className="hover:scale-105 duration-500 rounded-full bg-primary-blue-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={icons.facebookIcon}
                className="p-2 "
                alt="logo facebook"
              />
            </a>
            <a
              href="#"
              className="hover:scale-105 duration-500 rounded-full bg-primary-blue-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={icons.instagramIcon}
                className="p-2 "
                alt="logo instagram"
              />
            </a>
            <a
              href="#"
              className="hover:scale-105 duration-500 rounded-full bg-primary-blue-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={icons.linkedinIcon}
                className="p-2 "
                alt="logo linkedin"
              />
            </a>
            <a
              href="#"
              className="hover:scale-105 duration-500 rounded-full bg-primary-blue-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                src={icons.whatsappIcon}
                className="p-2 "
                alt="logo linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-2 sm:mt-1">
        <p className="text-sm text-center text-gray-500 ">
          © {new Date().getFullYear()} - All Rights Reserved.{" "}
        </p>
        <a href="#" className=" pb-3 text-sm text-center text-gray-500 ">
          Política de privacidade
        </a>
      </div>
    </footer>
  );
}
3;
