interface ItemsProps {
    textContent?: string;
    image: any;
  }
  
  export default function MenuItemsProfile(props: ItemsProps) {
    return (
      <div className="flex justify-start items-center">
        <img className="bg-card p-1 rounded-lg"  src={props.image} />
        <label className="ml-3 text-gray-800" htmlFor="flexCheckDefault">
          {props.textContent}
        </label>
      </div>
    );
  }
  