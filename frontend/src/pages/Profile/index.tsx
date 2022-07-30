import { useNavigate } from "react-router-dom";
import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";
import { icons } from "../../assets";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <main >
      <section className="mt-8">
        <PetAvatar />
      </section>
      <section className="">
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
      </section>
    </main>
  );
}
