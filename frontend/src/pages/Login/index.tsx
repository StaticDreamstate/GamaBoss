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
    <main className="grid justify-items-center">
      <img src={images.imagePets} alt="imagem de pets" className="w-screen" />

      <h2 className="justify-self-center pt-10 font-600 text-mobile-size-24px leading-mobile-line-26.4px">
        Bom ter você com a gente!
      </h2>
      <p className=" justify-self-center pt-2 pb-5 text-mobile-size-16px">
        O plano feito especialmente para o seu pet
      </p>
      <form className="w-2/3" onSubmit={handleSubmit}>
        <label className="font-700 text-mobile-size-16px" htmlFor="email">
          E-mail
        </label>
        <input
          key={"email"}
          type="email"
          className={`mt-2 mb-6 block w-full h-11 px-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out ${
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
          className={`mt-2 mb-4 block w-full h-11 px-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out ${
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
        <div className="flex my-8 justify-between">
          <div className="flex items-center">
            <input type="checkbox" />
            <label className="px-1 font-400 text-[12px]" htmlFor="checkbox">
              Manter conectado
            </label>
          </div>
          <a className="font-400 text-[12px]" href="">
            Esqueceu a senha ?
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Button className="w-auto" buttonLabel="Entrar" type="submit" />
          <span className="font-400 text-[12px] my-2">Ainda não tem uma conta?<a className="font-600 text-[12px]" href="">Cadastre-se!</a></span>
        </div>
      </form>
    </main>
  );
}
