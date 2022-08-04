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
      className="flex h-[120px] mb-4 rounded-lg border-solid border-0 bg-card"
    >
      <img className="rounded-l-lg w-[130px]" src={props.imagePet} alt="" />
      <p className="mx-5 my-9 font-500 text-mobile-size-14px font-libre leading-[19.6px] ">
        {props.texto}
      </p>
    </a>
  );
}
