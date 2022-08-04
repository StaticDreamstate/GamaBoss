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
      className="bg-card w-[144px] h-[113px] flex flex-col items-center justify-center gap-4 text-primary-blue-1 rounded-2xl shadow-[4px_5px_10px_#393a3c0d] hover:scale-105 transition-transform"
    >
      <img src={props.imagePet} width={40} />
      <button className="font-600 text-mobile-size-16px font-libre">
        {props.texto}
      </button>
    </a>
  );
}
