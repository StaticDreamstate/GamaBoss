interface ItemsProps {
    textContent?: string;
    image: any;
  }
  
  export default function MenuItemsProfile(props: ItemsProps) {
    return (
      <div className="flex justify-start mt-3">
        <img src={props.image} />
        <label className="ml-3 text-gray-800" htmlFor="flexCheckDefault">
          {props.textContent}
        </label>
      </div>
    );
  }
  