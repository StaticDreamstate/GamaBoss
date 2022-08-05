interface ICarPetProps {
  children?: JSX.Element;
  imagePet: any;
  texto: string;
  redirect: string;
}

export default function CardPets(props: ICarPetProps) {
  return (
    <a
      href={props.redirect}
      className="bg-card w-[144px] md:w-[320px] h-[113px] md:h-[226px] flex flex-col items-center justify-center gap-4 text-primary-blue-1 rounded-2xl shadow-[4px_5px_10px_#393a3c0d] hover:scale-105 transition-transform"
    >
      <img src={props.imagePet} className="w-[45px] md:w-[100px]"/>
      <button className="font-600 md:font-700 text-mobile-size-16px md:text-[24px] font-libre">
        {props.texto}
      </button>
    </a>
  );
}
