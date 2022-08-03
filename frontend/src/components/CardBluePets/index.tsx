
interface ICarPetProps {
    children?: JSX.Element;
    imagePet: any;
    texto: string;
    redirect: string;
}

export default function CardPets(props: ICarPetProps) {
    return (
        <a href={props.redirect}
            className="bg-[#EDF7FF] w-[148px] h-[113px] pt-5 text-center text-[#027BE3] rounded-2xl shadow-[4px_5px_10px_#393a3c0d]">

            <img src={props.imagePet} className="pl-12" />
            <button className="font-600 text-mobile-size-16px font-libre">{props.texto}</button>

        </a>

    );
}











//  <div className="flex justify-center gap-6 flex-wrap w-auto items-center ">
//  <div className="bg-[#EDF7FF] w-[148px] h-[113px] pt-5 text-center text-[#027BE3]">
//    <img src={images.pataPet} className="pl-12" />
//    <button className=""> Perfil Pet</button>
//  </div>
// </div>