import { useContext, useEffect, useState } from "react";
import { images } from "../../assets";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { writeError, errorResponse, setErrorResponse } =
    useContext(AuthContext);

  useEffect(() => {
    setErrorResponse(null);
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();
    writeError(email, password);
  }

  return (
    <main className="grid justify-items-left md:justify-items-center">
      <img
        src={images.imagePets}
        alt="imagem de pets"
        className="w-screen md:absolute md:left-0 md:h-[468px]"
      />
      <section className="md:py-64 md:justify-items-center z-10">
        <div className=" grid justify-around md:justify-items-center p-5 w-full z-10 md:rounded-[32px] md:border-2 md:border-primary-blue-1 md:mt-6 lg:w-[914px] lg:h-[839] md:bg-white ">
          <h2 className="justify-self-left  w-[244px] sm:w-full pt-6 font-600 text-mobile-size-24px leading-mobile-line-26.4px text-primary-blue-1">
            Que bom ter você com a gente!
          </h2>
          <p className=" w-[296px] md:w-full pt-3 pb-5 text-mobile-size-16px">
            O plano que você monta <strong>especialmente</strong> para o seu pet
          </p>
          <form className="w-5/6 pt-1 " onSubmit={handleSubmit}>
            <label className="font-700 text-mobile-size-16px " htmlFor="email">
              E-mail
            </label>
            <input
              key={"email"}
              type="email"
              placeholder="Digite seu e-mail"
              className={`mt-2 mb-6 block w-[308px] sm:w-full h-[46px] placeholder:text-mobile-size-16px placeholder:text-gray-3 px-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out ${
                errorResponse ? "border-alert focus:border-alert" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              className={`absolute -mt-6 mx-2 text-[12px] ${
                errorResponse ? "text-alert" : ""
              }`}
            >
              {errorResponse == "empty" ? "Erro no preenchimento" : " "}
              {errorResponse == "errorLogin" ? "Email ou senha inválidos" : ""}
            </p>
            <label className="font-700 text-mobile-size-16px" htmlFor="email">
              Senha
            </label>
            <input
              key={"password"}
              type="password"
              placeholder="Digite sua senha"
              className={`mt-2 mb-4 p-2 block w-[308px] sm:w-full text-mobile-size-16px h-11 px-3 placeholder:text-mobile-size-16px placeholder:text-gray-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out ${
                errorResponse ? "border-alert focus:border-alert" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              className={`absolute -mt-4 mx-2 text-[12px] ${
                errorResponse ? "text-alert" : ""
              }`}
            >
              {errorResponse == "empty" ? "Erro no preenchimento" : ""}
              {errorResponse == "errorLogin" ? "Email ou senha inválidos" : ""}
            </p>
            <div className="flex justify-between w-[300px] md:w-[332px] my-7">
              <div className="flex items-center">
                <input type="checkbox" />
                <label
                  className="px-1 mr-10 font-400 text-[12px]"
                  htmlFor="checkbox"
                >
                  Manter conectado
                </label>
              </div>
              <a className="font-400 text-[12px]" href="">
                Esqueceu a senha ?
              </a>
            </div>
            <div className="flex flex-col items-center pb-[96px]">
              <Button
                className="w-20 h-10 px-3 py-6 text-center flex justify-center items-center ml-12 md:ml-7"
                buttonLabel="Entrar"
                type="submit"
              />
              <span className="font-400 text-[12px] my-3 ml-[31px] md:ml-0">
                Ainda não tem uma conta?
                <a
                  className="font-600 ml-1  text-[12px] text-primary-blue-1"
                  href=""
                >
                  Cadastre-se!
                </a>
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
