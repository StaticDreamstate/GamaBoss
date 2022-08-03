import { images } from "../../assets";
import CardPets from "../../components/CardPets";

export default function Home() {
  return (
    <>
      <main className="grid justify-items-stretc">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen" />
        <h2 className=" pt-10 px-6 font-600 text-mobile-size-24px">
          Olá, <strong className="text-primary-blue-1">Alessandra!</strong>
        </h2>
        <p className="px-6 text-mobile-size-16px">
          O que você deseja fazer hoje?
        </p>
        <div className="flex justify-center gap-6 flex-wrap w-auto items-center ">
          <CardPets imagePet={images.pataPet} texto="Perfil Pet" redirect="#" />
          <CardPets imagePet={images.monitorCard} texto="Nosso blog" redirect="#" />
          <CardPets imagePet={images.adicionarPet} texto="Adicionar Pet" redirect="#" />
          <CardPets imagePet={images.meuPlano} texto="Meu Plano" redirect="#" /> 
        </div>
      </main>
    </>
  );
}
