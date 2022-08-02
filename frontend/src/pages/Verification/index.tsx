import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import { images } from "../../assets";

export default function Verification(){
  return (
    <main className="">
      <div className="flex justify-center">
        <img src={images.dogConf} className="max-w-sm" alt="" />
      </div>
      <div className="mt-5 flex justify-center">
        <p className="text-3xl pl-16 pt-5"><span className="text-primary-blue-1">Tobias </span> está ainda mais protegido!</p>
      </div>
      <div className="mt-5 flex items-center justify-center pt-5 pr-14">
        <p className="pl-16 font-sans text-xl">Ao confirmar os serviços adicionados, você receberá um e-mail de confirmação das alterações do seu plano atual.</p>
      </div>
      <div className="flex justify-center mt-5 font-sans text-xl">
        <CheckBox labelContent={"Li os termos e confirmo a altereação"} /> 
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

      <div className="flex items-center justify-center mt-10">
        <Button className="font-600 w-[120px] sm:w-[165px] shadow-lg" buttonLabel={"Confirmar"} />
      </div>
      <div className="flex items-center justify-center mt-3 mb-28">
        <Button className="font-600 text-black w-[118px] sm:w-[163px] border-solid border-2 border-primary-blue-1 bg-white shadow-lg hover:bg-gray-6" buttonLabel={"Cancelar"} /> 
      </div>

    </main>
  )
}
