import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <main className="my-8 flex flex-col items-center">
      <Button
        onClick={() => navigate("/meu-plano")}
        className="m-8"
        buttonLabel="alterar perfil"
      />
      <section className="flex flex-col gap-2">
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
        <div className="flex">
          <img className="mx-1" src="" alt="Icone" />
          <p className="mx-1">alguma funcionalidade</p>
        </div>
      </section>
      <section>{/* colocar cards */}</section>
    </main>
  );
}
