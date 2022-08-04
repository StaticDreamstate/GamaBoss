import Button from "../../components/Button";
import { images } from "../../assets";

export default function Verification() {
  return (
    <main className="">
      <div className="flex justify-center">
        <img src={images.dogConf} className="w-screen" alt="" />
      </div>
      <div className="mt-5 flex justify-center">
        <p className="text-3xl pl-16 pt-5">
          <span className="text-primary-blue-1">Tobias </span> está ainda mais
          protegido!
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center pt-5 pr-16">
        <p className="pl-16 font-sans text-xl">
          Você receberá um e-mail confirmando as mudanças no plano de{" "}
          <span className="font-bold">Tobias.</span>{" "}
          <p>Qualquer divergência, entre em contato com a nossa equipe.</p>
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button
          className="font-600 w-[198px] sm:w-[292px] shadow-lg"
          buttonLabel={"Ir para a página inicial"}
        />
      </div>
      <div className="flex items-center justify-center mt-3 mb-28">
        <Button
          className="font-600 text-black w-[196px] sm:w-[290px] border-solid border-2 border-primary-blue-1 bg-white shadow-lg hover:bg-gray-6"
          buttonLabel={"Reportar um problema"}
        />
      </div>
    </main>
  );
}
