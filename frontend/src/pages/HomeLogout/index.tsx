
import { icons, images } from "../../assets";
import Button from "../../components/Button";
import CardPets from "../../components/CardPets";


export default function HomeLogout() {
  return (
    <>
      <main className="grid">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen" />

        <h2 className="pt-[42px] px-[24px] font-600 text-mobile-size-24px text-primary-blue-1 font-libre leading-[26.4px]" >
          O plano perfeito<br />
          para seu pet
        </h2>
        <p className="pt-[16px] px-[24px] font-400 text-mobile-size-16px font-libre leading-[22.4px]">
          Confira  por que o PetPlan é ideal<br />
          para o seu bichinho
        </p>
        <div className="pt-[48px]">

          <span className="px-[24px]  flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
            <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
            Monte o plano perfeito para seu pet
          </span>
          <p className="px-[58px] pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
            Com a PetPlan você consegue selecionar os serviços que fazem mais sentido para o seu bichinho
          </p>
          <span className="px-[24px]  flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
            <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
            Sem burocracias de adesão
          </span>
          <p className="px-[58px] pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
            Após contratar o plano, seus documentos são analisados em até 24 horas. Tudo online e sem papelada
          </p>
          <span className="px-[24px]  flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
            <img className="pr-[14px] h-5" src={icons.iconCheck} alt="icon check" />
            Receba dicas personalizadas de cuidados com seu pet
          </span>
          <p className="px-[58px] pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
            Ao assinar a PetPlan, você tem acesso a conteúdos exclusivos que podem ajudar nos cuidados com seu pet
          </p>
          <span className="px-[24px]  flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
            <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
            Preços que cabem no seu bolso
          </span>
          <p className="px-[58px] pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
            Nossos valores são alterados de acordo com a quantidade de serviços contratados no plano
          </p>

        </div>

        <div className="flex pt-[24px] justify-center">
          <Button
            className="py-[12px] px-[24px] w-[130px] font-600 text-mobile-size-14px font-libre leading-[16.97px]"
            buttonLabel={"Saiba mais"} />
        </div>

        <div className="pt-[76px] px-[24px] ">
          <div>
            <h3 className="uppercase font-600 text-mobile-size-12px font-libre leading-[16.8px] text-primary-blue-1">
              FIQUE POR DENTRO
            </h3>
            <span className="font-700 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
              Dicas de cuidados com o seu bichinho
            </span>
          </div>
          <a href={"/home"} className="pt-[11px] flex font-600 text-mobile-size-12px font-libre leading-[16.8px]  text-primary-blue-1" >
            Ver mais dicas
            <img className="pl-[5px] h-[20px] w-[25px]" src={icons.iconArromRight} alt="icon arrom right" />
          </a>

        </div>

        <div className="mx-6 my-14">

          <CardPets imagePet={images.dog1} texto={"O que fazer quando o pet é muito agitado?"} redirect={""} />
          <CardPets imagePet={images.dog2} texto={"Quais as vantagens de um plano de saúde para pet?"} redirect={""} />
          <CardPets imagePet={images.dog3} texto={"5 cuidados para o bem-estar do seu pet"} redirect={""}/>

        </div>
      </main>
    </>
  );
}
