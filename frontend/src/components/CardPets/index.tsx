interface ICarPetProps {
    children?: JSX.Element;
    imagePet: any;
    texto: string;
    redirect: string;
}

export default function CardPets(props: ICarPetProps) {
    return (
        <a href={props.redirect} className="bg-[#EDF7FF] grid place-items-center w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
                <img className="rounded-l-lg " src={props.imagePet} alt="" />
                <p className="mx-5 font-500 text-mobile-size-14px font-libre leading-[19.6px] ">{props.texto}</p>
        </a>
    );
}
