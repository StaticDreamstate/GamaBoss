import { useContext, useState } from "react";
import { stringify } from "uuid";
import logo from "../../assets/hometest.png";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  function handleSubmit(e: any) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <main className="pt-10 grid justify-items-center">
      <img
        src={logo}
        alt="imagem de"
        className="justify-self-center h-60 rounded-2xl border-solid border-2 border-slate-200"
      />

      <h2 className="justify-self-center pt-10">Lorem ipsum dolor sit amet.</h2>
      <p className=" justify-self-center pt-2 pb-5 px-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <form 
      className="w-2/3"
      onSubmit={handleSubmit}>
        <input
          key={"email"}
          type="email"
          className=" my-4 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          key={"password"}
          type="password"
          className=" my-4 backdrop:form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button buttonLabel="Entrar" type="submit" />
      </form>
    </main>
  );
}
