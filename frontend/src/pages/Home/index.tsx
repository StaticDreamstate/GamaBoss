import { icons, images } from "../../assets";
import CardBluePets from "../../components/CardBluePets";
import CardPets from "../../components/CardPets";
import { mockPet } from "../../components/PetAvatar/mock";

export default function Home() {
  return (
    <>
      <main className="grid ">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen" />
        <div className="">
          <h2 className="pt-[42px] px-[24px] font-600 text-mobile-size-24px font-libre leading-[26.4px]">
            {`Olá, `}{" "}
            <span className="text-primary-blue-1"> {mockPet.dono} </span>
          </h2>
          <p className="px-[24px] pt-[8px] pb-12 font-400 text-mobile-size-16px font-libre leading-[22.4px]">
            O que você deseja fazer hoje?
          </p>
        </div>

        <source media="(s)" srcSet="" />
        <div className="flex justify-center gap-6 flex-wrap w-auto items-center">
          <CardBluePets
            imagePet={images.pataPet}
            texto={"Perfil Pet"}
            redirect={"/perfil"}
          />
          <CardBluePets
            imagePet={images.monitorCard}
            texto={"Nosso blog"}
            redirect={""}
          />
          <CardBluePets
            imagePet={images.adicionarPet}
            texto={"Adicionar Pet"}
            redirect={""}
          />
          <CardBluePets
            imagePet={images.meuPlano}
            texto={"Meu plano"}
            redirect={"/meu-plano"}
          />
        </div>

        <div className="pt-[56px] px-[24px]">
          <h3 className="uppercase font-600 text-mobile-size-12px font-libre leading-[16.8px] text-primary-blue-1">
            FIQUE POR DENTRO
          </h3>
          <span className="font-700 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
            {`Dicas para `}{" "}
            <span className="text-primary-blue-1"> {mockPet.name} </span>
          </span>
        </div>

        <div className="mx-6 my-14 flex flex-wrap ">
          <CardPets
            imagePet={images.dog4}
            className={"mr-2"}
            texto={"O que fazer quando o pet é muito agitado?"}
            redirect={""}
          />
          <CardPets
            imagePet={images.dog5}
            className={"mr-2"}
            texto={"Quais as vantagens de um plano de saúde para pet?"}
            redirect={""}
          />
          <CardPets
            imagePet={images.dog6}
            className={"mr-2"}
            texto={"5 cuidados para o bem-estar do seu pet"}
            redirect={""}
          />
        </div>
        <div className="justify-self-end mr-5">
          <a
            href={"/home"}
            className="pt-[11px] flex font-600 text-mobile-size-12px font-libre leading-[16.8px]  text-primary-blue-1"
          >
            Ver mais dicas
            <img
              className="pl-[5px] h-[20px] w-[25px]"
              src={icons.iconArromRight}
              alt="icon arrom right"
            />
          </a>
        </div>
      </main>
    </>
  );
}
