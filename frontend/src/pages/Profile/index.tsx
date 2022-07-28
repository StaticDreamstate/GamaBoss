import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Profile() {
  const navigate = useNavigate();
  const sendFile = async (file: any) => {
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   formData.append('fileName', file.name);
    //   requestApi.post("",formData)
    //   .then((response) => {
    //     console.log(response.data)});
  };

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
