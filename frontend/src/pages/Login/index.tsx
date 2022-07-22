import logo from "../../assets/hometest.png"
import Box from "../../components/BoxHome";

export default function Login(){
  return (
    <main className="pt-10 grid justify-items-stretc">
            
    <img src={logo} alt="imagem de" className="justify-self-center h-60 rounded-2xl border-solid border-2 border-slate-200" />

    <h2 className='pt-10 px-20'>Lorem ipsum dolor sit amet.</h2>
    <p className="pt-2 pb-5 px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, esse nesciunt. Officiis fugit u.</p>
   
    <button className=" justify-self-center mt-10 h-10 w-40 rounded-md border-solid border-2 border-slate-200">teste</button>
   

</main>
  )
}