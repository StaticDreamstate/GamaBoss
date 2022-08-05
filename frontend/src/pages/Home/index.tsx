import { icons, images } from "../../assets";
import CardBluePets from "../../components/CardBluePets";
import CardPets from "../../components/CardPets";
import { mockPet } from "../../components/PetAvatar/mock";

export default function Home() {
  return (
    <>
      <main className="grid">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen md:h-[662px]" />
        <div className="">
          <h2 className="pt-[42px] md:pt-[96px] px-[24px] md:px-[62px] font-600 text-mobile-size-24px md:text-[32px] font-libre leading-[26.4px]">
            {`Olá, `}
            <span className="text-primary-blue-1"> {mockPet.dono} </span>
          </h2>
          <p className="px-[24px] md:px-[62px] pt-[8px] md:pt-[24px] pb-12 md:pb-[96px] font-400 text-mobile-size-16px md:text-[24px] font-libre leading-[22.4px]">
            O que você deseja fazer hoje?
          </p>
        </div>

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

        <div className="pt-[56px] md:pt-[96px] px-[24px] md:px-[66px]">

          <h3 className="uppercase font-600 text-mobile-size-12px md:text-[14px] font-libre leading-[16.8px] md:pb-[18px] text-primary-blue-1">
            FIQUE POR DENTRO
          </h3>

          <span className="font-700 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px]  text-gray-1">
            {`Dicas para `}{" "}
            <span className="text-primary-blue-1"> {mockPet.name} </span>
          </span>

        </div>

        <div className=" flex justify-center gap-5  flex-wrap my-[40px] md:mt-[62px]">

          <CardPets imagePet={images.dog4} texto={"Seu amigo pet precisa de uma companhia?"} redirect={""} />
          <CardPets imagePet={images.dog5} texto={"Dicas para seu cachorro conviver melhor com gatos"} redirect={""} />
          <CardPets imagePet={images.dog6} texto={"Saiba quando seu pet deve tomar as vacinas V8 e V10"} redirect={""} />
          
        </div>

        <div className="justify-self-end mr-5 md:mb-[140px]">
          <a
            href={"/home"}
            className="pt-[11px] flex font-600 text-mobile-size-12px md:text-[18px] font-libre leading-[16.8px]  text-primary-blue-1"
          >
            Ver mais dicas
            <img
              className="pl-[5px] h-[20px] w-[25px] md:w-[35px] md:h-[24px]"
              src={icons.iconArromRight}
              alt="icon arrom right"
            />
          </a>
        </div>
      </main>
    </>
  );
}
