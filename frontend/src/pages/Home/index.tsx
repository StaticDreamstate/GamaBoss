import Box from "../../components/BoxHome";
import { images } from "../../assets";


export default function Home() {
  return (
    <>
      <main className="pt-10 grid justify-items-stretc">
        <img src={images.DogHome} alt="imagem de pets" className="w-screen" />

        <h2 className=" pt-10 px-20">Lorem ipsum dolor sit amet.</h2>
        <p className="pt-2 pb-5 px-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse
          nesciunt. Officiis fugit u.
        </p>
        <div className="px-20">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
      </main>
    </>
  );
}
