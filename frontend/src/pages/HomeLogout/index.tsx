import { icons, images } from "../../assets";
import Button from "../../components/Button";
import CardPets from "../../components/CardPets";


export default function HomeLogout() {
  return (
    <>
    
      <main className="grid">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen" />

        <h2 className="pt-[42px] sm:hidden px-[24px] font-600 text-mobile-size-24px text-primary-blue-1 font-libre leading-[26.4px]" >
          O plano perfeito<br />
          para seu pet
        </h2>
        <p className="pt-[16px] sm:hidden px-[24px] font-400 text-mobile-size-16px font-libre leading-[22.4px]">
          Confira  por que o PetPlan é ideal<br />
          para o seu bichinho
        </p>
        <div className="  flex justify-center mt-20 ">
        <h2 className="font-600 text-mobile-size-24px
         text-primary-blue-1 font-libre hidden sm:block leading-[26.4px]">Confira  por que o PetPlan
          é ideal para o seu bichinho
         </h2>
        </div>
       
        <div className=" pt-[48px] flex justify-center flex-wrap w-[100%]">
        
        <div className="pt-[48px] lg:w-[650px] ">
<span className="px-[24px] lg:text-xl flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
  <img className="pr-[14px] " src={icons.iconCheck} alt="icon check" />
  Sem burocracias de adesão
</span>
<p className="px-[58px] lg:text-sm pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
Após contratar o plano, seus documentos são analisados em até 24 horas. Tudo online e sem papelada
</p>    
       </div>
       <div className="pt-[48px] lg:w-[650px] ">
<span className="px-[24px] lg:text-xl flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
  <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
  Monte o plano perfeito para seu pet
</span>
<p className="px-[58px] lg:text-sm pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
  Com a PetPlan você consegue selecionar os serviços que fazem mais sentido para o seu bichinho
</p>    
       </div>
       <div className="pt-[48px] lg:w-[650px] ">
<span className="px-[24px] lg:text-xl flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
  <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
  Preços que cabem no seu bolso
</span>
<p className="px-[58px] lg:text-sm pt-[8px] pb-[24px] font-600 text-mobile-size-14px font-libre leading-[16.8px] text-gray-4">
Nossos valores são alterados de acordo com a quantidade de serviços contratados no plano
</p>    
       </div>
       <div className="pt-[48px] lg:w-[650px] ">
<span className="px-[24px] lg:text-xl flex font-600 text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
  <img className="pr-[14px]" src={icons.iconCheck} alt="icon check" />
  Dicas personalizadas de cuidados com seu pet
</span>
<p className="px-[58px] lg:text-sm pt-[8px] pb-[24px] font-600 text-mobile-size-12px font-libre leading-[16.8px] text-gray-4">
Ao assinar a PetPlan, você tem acesso a conteúdos exclusivos que podem ajudar nos cuidados com seu pet
</p>    
       </div>
        </div>
   
        

        <div className="flex pt-[24px] justify-center mr-2 mt-6">
          <Button
            className="py-[12px] px-[24px]  w-[130px] font-600 text-mobile-size-14px  font-libre leading-[16.97px]"
            buttonLabel={"Saiba mais"} />
        </div>

        <div className="pt-[76px] px-[24px] ">
          <div>
            <h3 className="uppercase md:px-10 md:text-lg font-600 text-mobile-size-12px font-libre leading-[16.8px] text-primary-blue-1">
              FIQUE POR DENTRO
            </h3>
            <span className="font-700 md:px-10 md:text-lg text-mobile-size-14px font-libre leading-[19.6px] text-gray-1">
              Dicas de cuidados com o seu bichinho
            </span>
          </div>
          <div className="md:flex justify-end ">
          <a href={"/home"} className="pt-[11px] flex font-600 md:px-10 md:text-lg text-mobile-size-12px font-libre leading-[16.8px]  text-primary-blue-1" >
            Ver mais dicas
            <img className="pl-[5px] h-[20px] w-[25px] mt-1" src={icons.iconArromRight} alt="icon arrom right" />
          </a>

          </div>
          
        </div>

        <div className=" flex justify-center gap-10 font-libre text-gray-1 col flex-wrap mx-6 my-14">

          <CardPets imagePet={images.dog1} texto={"O que fazer quando o pet é muito agitado?"} redirect={""} />
          <CardPets imagePet={images.dog2} texto={"Quais as vantagens de um plano de saúde para pet?"} redirect={""} />
          <CardPets imagePet={images.dog3} texto={"5 cuidados para o bem-estar do seu pet"} redirect={""}/>

        </div>
      </main>
    </>
  );
}