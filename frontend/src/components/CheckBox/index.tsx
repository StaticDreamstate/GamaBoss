interface CheckBoxProps {
  labelContent?: string;
}

export default function CheckBox(props: CheckBoxProps) {
  return (
    <div className="flex justify-start mt-3">
      <input
        className=" h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer"
        type="checkbox"
        id="flexCheckDefault"
      />
      <label className=" text-gray-800" htmlFor="flexCheckDefault">
        {props.labelContent}
      </label>
    </div>
  );
}
