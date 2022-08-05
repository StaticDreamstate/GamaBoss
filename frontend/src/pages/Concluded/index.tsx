import Button from "../../components/Button";
import { images } from "../../assets";
import { Link } from "react-router-dom";

export default function Verification() {
  return (
    <main className="grid justify-items-center font-normal">
        <img
          src={images.dogConf}
          className="w-screen md:absolute md:left-0 md:h-[468px]"
          alt="" />
      <div className="grid justify-items-center w-full z-10 md:rounded-[32px] md:border-2 md:border-primary-blue-1 md:mt-80 md:w-[600px] md:bg-white mb-32">
        <p className="text-3xl pt-10 pl-6">
          <span className="text-primary-blue-1">Tobias </span> está ainda mais
          protegido!
        </p>
        <div className="mt-5 flex items-center justify-center pt-5 pr-6">
          <p className="pl-8 font-sans text-base">
            Você receberá um e-mail confirmando as mudanças no plano de{" "}
            <span className="font-bold">Tobias.</span>{" "}
            <p>Qualquer divergência, entre em contato com a nossa equipe.</p>
          </p>
        </div>

        <div className="sm:font-sans grid grid-cols-1 gap-6 sm:grid-cols-2 items-center mt-10 mb-12">
          <Link to={"/home"}>
            <Button
              className="font-sans text-black pt-2 pb-2 pr-7 pl-7 border-solid border-2 border-primary-blue-1 bg-white shadow-lg"
              buttonLabel={"Reportar um problema"}
            />
          </Link>
          <Link to={"/home"}>
            <Button
              className="font-sans pt-3 pb-3 pr-8 pl-8 shadow-lg"
              buttonLabel={"Ir para a página inicial"}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
