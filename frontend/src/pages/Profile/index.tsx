import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets";
export default function Profile() {
  const navigate = useNavigate();

  return (
    <main className="my-8 flex flex-col items-center">
      <Button
        onClick={() => navigate("/meu-plano")}
        className="m-8"
        buttonLabel="alterar perfil"
      />
      <section className="flex flex-col gap-2">
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
      </section>
      <section  className="flex justify-evenly gap-10 mb-6 mt-6 flex-wrap">
        <div className="flex justify-center bot">
        <img src={images.dog1} className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">O que fazer quando o pet é muito agitado?</p>
         </div>
        </div>
        <div className="flex justify-center bot">
         <img src={images.dog2} className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">Quais as vantagens de um plano de saúde para pet?</p>
         </div>
        </div>
        <div className="flex justify-center bot">
        <img src={images.dog3}  className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">5 cuidados para o bem-estar do seu pet</p>
         </div>
        </div>
        


      </section>
      <section>{/* colocar cards */}</section>
    </main>
  );
}
