interface ICarPetProps {
    children?: JSX.Element;
    imagePet: any;
    texto: string;
    redirect: string;
}

export default function CardPets(props: ICarPetProps) {
    return (
        <a href={props.redirect} className="flex md:h-[231px]  mb-4 items-center md:w-[500px]
        rounded-lg border-solid border-0 bg-[#FAF6E6]">
                <img className="rounded-l-lg md:w-[250px] md:h-[230px]" src={props.imagePet} alt="" />
                <p className="mx-5 md:w-[200px] my-9 font-600 text-mobile-size-14px  text-gray-1 font-libre leading-[19.6px] ">{props.texto}</p>
        
        </a>
    );
}
