import Box from "../../components/BoxHome";
import Cards from "../../assets/images/pet.png"
import { images } from "../../assets";


export default function Home() {
  return (
    <>
      <main className="pt-10 grid justify-items-stretc">
        <img src={"logo"} alt="imagem de pets" className="" />

        <h2 className=" pt-10 px-20">Lorem ipsum dolor sit amet.</h2>
        <p className="pt-2 pb-5 px-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse
          nesciunt. Officiis fugit u.
        </p>
        <div className="px-20">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div><source media="(s)" srcset="" />

         <div className="flex justify-center gap-6 flex-wrap w-auto items-center ">
          <div className="bg-[#EDF7FF] w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
            <img src={images.pataPet} className="pl-12" />
           <button className=""> Perfil Pet</button>
           </div>
          <div className="bg-[#EDF7FF] w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
          <img src={images.monitorCard} className="pl-12" />
           <button className=""> Nosso blog</button>
           </div>
          <div className="bg-[#EDF7FF]  w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
          <img src={images.adicionarPet} className="pl-12" />
           <button className=""> Adicionar Pet</button>
           </div>
          <div className="bg-[#EDF7FF] w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
          <img src={images.meuPlano} className="pl-12" />
           <button className=""> Meu plano</button>
           </div>
         </div>
      
      </main>
    </>
  );
}
