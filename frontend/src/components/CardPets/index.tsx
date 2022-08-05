interface ICarPetProps {
  children?: JSX.Element;
  imagePet: any;
  texto: string;
  redirect: string;
  className?: string;
}

export default function CardPets(props: ICarPetProps) {

  return (
    <a
      href={props.redirect}
      className={`flex h-[120px] md:h-[200px] w-[311px] md:w-[446px] mb-4 rounded-lg border-solid border-0 bg-[#FAF6E6] ${props.className}`}
    >
      <img className="rounded-l-lg w-[130px] md:w-[324px]" src={props.imagePet} alt="" />
      <p className="ml-5 mr-2 md:mr-[10px] my-9 md:my-[40px] font-500 text-mobile-size-14px md:text-[24px] font-libre leading-[19.6px] md:leading-[33.6px] ">
        {props.texto}
      </p>
    </a>
  );
}
