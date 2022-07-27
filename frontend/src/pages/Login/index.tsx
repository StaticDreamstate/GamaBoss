import { useContext, useState } from "react";
import { images } from "../../assets";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { writeError, errorResponse } = useContext(AuthContext);

  function handleSubmit(e: any) {
    e.preventDefault();
    writeError(email, password)
  }

  return (
    <main className="grid justify-items-center">
      <img src={images.imagePets} alt="imagem de pets" className="" />

      <h2 className="justify-self-center pt-10 font-600 text-mobile-size-24px leading-mobile-line-26.4px">
        Bom ter você com a gente!
      </h2>
      <p className=" justify-self-center pt-2 pb-5 text-mobile-size-16px">
        O plano feito especialmente para o seu pet
      </p>
      <form className="w-2/3" onSubmit={handleSubmit}>
        <label className="font-700 text-mobile-size-16px" htmlFor="email">E-mail</label>
        <input
          key={"email"}
          type="email"
          className="mt-2 mb-4 block w-full h-11 px-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-700 text-mobile-size-16px" htmlFor="email">Senha</label>
        <input
          key={"password"}
          type="password"
          className="mt-2 mb-4 block w-full h-11 px-3 text-xl font-normal text-gray-700 border-2 border-gray-4 hover:border-primary-blue-1 focus:border-primary-blue-1 focus:outline-none rounded-lg transition ease-in-out"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="absolute z-0">
          {errorResponse == "empty" ? "Erro no preenchimento" : " "}
        </p>
        <Button className="my-12 " buttonLabel="Entrar" type="submit" />
      </form>
    </main>
  );
}
