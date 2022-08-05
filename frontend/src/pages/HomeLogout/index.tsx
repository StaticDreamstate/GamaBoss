import { icons, images } from "../../assets";
import Button from "../../components/Button";
import CardPets from "../../components/CardPets";


export default function HomeLogout() {
  return (
    <>

      <main className="grid">
        <div>
          <img src={images.DogHome} alt="imagem de pets" className="w-screen md:h-[662px]" />

          <h2 className="pt-[42px] md:hidden px-[24px] font-600 text-mobile-size-24px text-primary-blue-1 font-libre leading-[26.4px]" >
            O plano perfeito<br />
            para seu pet
          </h2>
        </div>

        <div className="flex md:justify-center">
          <p className="pt-[16px] w-[310px] md:w-auto md:pt-[62px] px-[24px] md:font-600 font-400 text-mobile-size-16px md:text-[32px] font-libre leading-[22.4px] md:leading-[35.2px] md:text-primary-blue-1">
            Confira  por que o PetPlan é ideal
            para o seu bichinho
          </p>
        </div>

        <div className="flex flex-wrap md:justify-center pt-[48px] md:pt-[98px]">
          <div>
            <div className="">
              <span className="px-[24px]  flex font-600 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px] text-gray-1">
                <img className="pr-[14px] md:h-[25px]" src={icons.iconCheck} alt="icon check" />
                Sem burocracias de adesão
              </span>
              <p className="md:w-[600px] px-[58px] md:px-[64px] pt-[8px] md:pt-[24px] pb-[24px] md:pb-[74px] font-600 text-mobile-size-12px md:text-[16px] font-libre leading-[16.8px] text-gray-4">
                Após contratar o plano, seus documentos são analisados em até 24 horas. Tudo online e sem papelada
              </p>
            </div>
            <div className="">
              <span className="px-[24px] flex font-600 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px] text-gray-1">
                <img className="pr-[14px] md:h-[25px]" src={icons.iconCheck} alt="icon check" />
                Monte o plano perfeito para seu pet
              </span>
              <p className="md:w-[600px] px-[58px] md:px-[64px] pt-[8px] md:pt-[24px] pb-[24px] md:pb-[74px] font-600 text-mobile-size-12px md:text-[16px] font-libre leading-[16.8px] text-gray-4">
                Com a PetPlan você consegue selecionar os serviços que fazem mais sentido para o seu bichinho
              </p>
            </div>
          </div>

          <div>
            <div className="">
              <span className="px-[24px]  flex font-600 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px] text-gray-1">
                <img className="pr-[14px] md:h-[25px]" src={icons.iconCheck} alt="icon check" />
                Preços que cabem no seu bolso
              </span>
              <p className="md:w-[600px] px-[58px] md:px-[64px]  pt-[8px] md:pt-[24px] pb-[24px] md:pb-[74px] font-600 text-mobile-size-12px md:text-[16px] font-libre leading-[16.8px] text-gray-4">
                Nossos valores são alterados de acordo com a quantidade de serviços contratados no plano
              </p>
            </div>
            <div className="">
              <span className="px-[24px]  flex font-600 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px] text-gray-1">
                <img className="pr-[14px] h-[20px] md:h-[25px]" src={icons.iconCheck} alt="icon check" />
                Dicas personalizadas de cuidados com seu pet
              </span>
              <p className="md:w-[600px] px-[58px] md:px-[64px] pt-[8px] md:pt-[24px] pb-[24px] md:pb-[74px] font-600 text-mobile-size-12px md:text-[16px] font-libre leading-[16.8px] text-gray-4">
                Ao assinar a PetPlan, você tem acesso a conteúdos exclusivos que podem ajudar nos cuidados com seu pet
              </p>
            </div>
          </div>
        </div>



        <div className="flex pt-[24px] justify-center mr-2">
          <Button
            className="py-[12px] px-[24px]  w-[130px] md:w-[175px] md:h-[55px] font-600 text-mobile-size-14px md:text-[20px] font-libre leading-[16.97px]"
            buttonLabel={"Saiba mais"} />
        </div>

        <div className="pt-[76px] md:pt-[34px] px-[24px] md:px-[62px] ">
          <div>
            <h3 className="uppercase md:pb-[24px] md:text-[14px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-primary-blue-1">
              FIQUE POR DENTRO
            </h3>
            <span className="font-700  md:text-[24px] text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
              Dicas de cuidados com o seu bichinho
            </span>
          </div>


        </div>

        <div className=" flex justify-center gap-5 flex-wrap my-[40px] md:mt-[64px]">

          <CardPets imagePet={images.dog1} texto={"O que fazer quando o pet é muito agitado?"} redirect={""} />
          <CardPets imagePet={images.dog2} texto={"Quais as vantagens de um plano de saúde para pet?"} redirect={""} />
          <CardPets imagePet={images.dog3} texto={"5 cuidados para o bem-estar do seu pet"} redirect={""} />

        </div>

        <div className="justify-self-end mr-5 md:mb-[140px]">
          <a href={"/"} className="pt-[11px] flex font-600 text-mobile-size-12px md:text-[18px] font-libre leading-[16.8px]  text-primary-blue-1" >
            Ver mais dicas
            <img className="pl-[5px] h-[20px] w-[25px] md:w-[35px] md:h-[24px]" 
            src={icons.iconArromRight} alt="icon arrom right" />
          </a>

        </div>
      </main>
    </>
  );
}