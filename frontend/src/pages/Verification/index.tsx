import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import { images } from "../../assets";
import { mockPet } from "../../components/PetAvatar/mock";
import { mockVerification } from "./mock";
import { icons } from "../../assets";
import { Link } from "react-router-dom";

export default function Verification(){
  return (
    <main className="grid justify-items-center font-normal">
        <img
          src={images.dogConf}
          className="w-screen md:absolute md:left-0 md:h-[468px]"
          alt="" />
      <div className="grid justify-items-center w-full z-10 md:rounded-[32px] md:border-2 md:border-primary-blue-1 md:mt-60 md:w-[500px] md:bg-white font-normal mb-32">
        <p className="text-3xl pl-16 pt-10">
          <span className="text-primary-blue-1"> {mockPet.name} </span>
            {` está próximo de ter ainda mais proteção!`} 
        </p>
        <div className="font-sans">
          <p className="pl-16 font-sans text-xl pt-10">Ao confirmar os serviços adicionados, você receberá um e-mail de confirmação das alterações do seu plano atual.</p>
        </div>
        <div className="font-sans mt-10"> 
          <div className="flex items-center space-x-8">
            <img
              className="pr-[1px]"
              src={icons.iconCheck}
              alt="icon check"
            /> 
            <p className="">
            {mockVerification.servico1}            
            </p>
            <img
              className="pr-[1px]"
              src={icons.iconCheck}
              alt="icon check"
            /> 
            <p className="">
            {mockVerification.servico2}            
            </p>
          </div>
          <div className="flex items-center space-x-5 mt-4">
            <img
              className="pr-[10px]"
              src={icons.iconCheck}
              alt="icon check"
            /> 
            <p className="">
            {mockVerification.servico3}            
            </p>
            <img
              className="pr-[10px]"
              src={icons.iconCheck}
              alt="icon check"
            /> 
            <p className="">
            {mockVerification.servico4}            
            </p>
          </div>
        </div>
        <div className="font-sans mt-10">
          <CheckBox labelContent={"Li os termos e confirmo a altereção"} /> 
        </div>
    
          {/* ------ Testando formas de check box com Tailwind -------
                <div className="flex items-center mb-4 justify-center mt-5">
                  <input
                    id="testando"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label
                      for="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Testando
                    </label>
                </div> */}

        <div className="flex items-center justify-center mt-10 font-normal mb-10 space-x-4">
          <Link to={"/alterar"}>
            <Button
              className="font-sans text-black pt-2 pb-2 pr-7 pl-7 border-solid border-2 border-primary-blue-1 bg-white shadow-lg"
              src=""
              buttonLabel={"Cancelar"}>
            </Button>
          </Link>
          <Link to={"/concluido"}>
            <Button
              className="font-sans pt-3 pb-3 pr-8 pl-8 shadow-lg"
              src=""
              buttonLabel={"Confirmar"}>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
