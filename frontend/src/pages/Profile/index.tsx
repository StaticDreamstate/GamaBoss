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
      <section className="flex w-screen justify-center items-center">
        <form>
          <label
            className="px-2 cursor-pointer hover:opacity-90"
            htmlFor="file"
          >
            <img
              className="w-20 h-20 my-2 rounded-full"
              src="https://picsum.photos/200/300"
              alt="Foto do pet"
            />
            <input
              onChange={(e: any) => sendFile(e.target.files[0])}
              className="hidden"
              type="file"
              id="file"
              name="upload"
            />
            Alterar Foto
          </label>
        </form>
        <h2>Nome do Pet</h2>
      </section>
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
