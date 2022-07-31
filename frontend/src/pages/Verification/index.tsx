<<<<<<< HEAD
import Header from "../../components/Header"
import Button from "../../components/Button"
import logo from "../../assets/hometest.png"
import CheckBox from "../../components/CheckBox";
import PetAvatar from "../../components/PetAvatar";

export default function Verification(){
  return (
    <main className="grid justify-items-stretc">
      <PetAvatar />
      <img 
        src={logo}
        alt="imagem xxx"
        className="justify-self-center mt-10 h-60 rounded-2xl border-solid border-2 border-slate-200"
      />
      <div className="mt-5 flex items-center justify-center">
        <p>texto um</p>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <p>texto dois</p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <CheckBox labelContent={"Testando"}> </CheckBox>
      </div>

{/* ------ Testando fomras de check box com Tailwind -------
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

      <div className="flex items-center justify-center mt-5">
        <Button buttonLabel={"Confirmar"}> </Button>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button buttonLabel={"Cancelar"}> </Button>
      </div>

    </main>
  )
}
