import Header from "../../components/Header"
import Button from "../../components/Button"
import logo from "../../assets/hometest.png"
import CheckBox from "../../components/CheckBox";

export default function Verification(){
  return (
    <main className="grid justify-items-stretc">
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
        <Button buttonLabel={"Ir para a página inicial"}> </Button>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button buttonLabel={"Reportar um problema"}> </Button>
      </div>

    </main>
  )
}